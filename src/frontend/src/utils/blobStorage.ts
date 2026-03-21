import { HttpAgent } from "@icp-sdk/core/agent";
import { loadConfig } from "../config";
import { useInternetIdentity } from "../hooks/useInternetIdentity";
import { StorageClient } from "./StorageClient";

const MOTOKO_DEDUPLICATION_SENTINEL = "!caf!";

/**
 * Given a blobId (hash stored in backend), returns the direct URL to the blob.
 * This must be called after config is loaded. For synchronous use, you can
 * build the URL using the storage gateway directly.
 */
export async function getBlobUrlAsync(blobId: string): Promise<string> {
  const config = await loadConfig();
  const agent = new HttpAgent({ host: config.backend_host });
  const storageClient = new StorageClient(
    config.bucket_name,
    config.storage_gateway_url,
    config.backend_canister_id,
    config.project_id,
    agent,
  );
  // blobId is stored as "!caf!sha256:..." in the DB per backend.ts convention
  const hash = blobId.startsWith(MOTOKO_DEDUPLICATION_SENTINEL)
    ? blobId.substring(MOTOKO_DEDUPLICATION_SENTINEL.length)
    : blobId;
  return storageClient.getDirectURL(hash);
}

/**
 * Synchronously build a blob URL. Requires the storage gateway URL and project
 * to be known. Reads from window.__caffeineConfig if available (set by config.ts
 * side-effect), otherwise falls back to env vars baked in at build time.
 */
export function getBlobUrl(blobId: string): string {
  // blobId is stored as "!caf!sha256:..." per backend convention
  const hash = blobId.startsWith(MOTOKO_DEDUPLICATION_SENTINEL)
    ? blobId.substring(MOTOKO_DEDUPLICATION_SENTINEL.length)
    : blobId;

  // Use env vars injected at build time
  const gatewayUrl =
    (typeof process !== "undefined" && process.env?.STORAGE_GATEWAY_URL) ||
    "https://blob.caffeine.ai";
  const projectId =
    (typeof process !== "undefined" && process.env?.PROJECT_ID) ||
    "0000000-0000-0000-0000-00000000000";
  const ownerId =
    (typeof process !== "undefined" && process.env?.CANISTER_ID_BACKEND) || "";

  return `${gatewayUrl}/v1/blob/?blob_hash=${encodeURIComponent(hash)}&owner_id=${encodeURIComponent(ownerId)}&project_id=${encodeURIComponent(projectId)}`;
}

/**
 * Hook for uploading files to blob storage.
 * Returns an upload function that accepts a File and returns { blobId, url }.
 */
export function useBlobStorage() {
  const { identity } = useInternetIdentity();

  const upload = async (
    file: File,
  ): Promise<{ blobId: string; url: string }> => {
    const config = await loadConfig();
    const agent = new HttpAgent({
      host: config.backend_host,
      identity: identity ?? undefined,
    });
    if (config.backend_host?.includes("localhost")) {
      await agent.fetchRootKey().catch(console.error);
    }
    const storageClient = new StorageClient(
      config.bucket_name,
      config.storage_gateway_url,
      config.backend_canister_id,
      config.project_id,
      agent,
    );

    const bytes = new Uint8Array(await file.arrayBuffer());
    const { hash } = await storageClient.putFile(bytes);
    const blobId = MOTOKO_DEDUPLICATION_SENTINEL + hash;
    const url = await storageClient.getDirectURL(hash);
    return { blobId, url };
  };

  return { upload };
}
