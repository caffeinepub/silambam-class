import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useBlobStorage } from "../utils/blobStorage";
import { useActor } from "./useActor";

export function useGetAllSubmissions() {
  const { actor, isFetching } = useActor();
  return useQuery<
    Array<{ name: string; email: string; phone: string; message: string }>
  >({
    queryKey: ["submissions"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllContactSubmissions();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (input: {
      name: string;
      email: string;
      phone: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitForm(input);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["submissions"] });
    },
  });
}

export function useGetAllGalleryPhotos() {
  const { actor, isFetching } = useActor();
  return useQuery<Array<{ id: bigint; caption: string; blobId: string }>>({
    queryKey: ["galleryPhotos"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllGalleryPhotos();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAddGalleryPhoto() {
  const { actor } = useActor();
  const { upload } = useBlobStorage();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ file, caption }: { file: File; caption: string }) => {
      if (!actor) throw new Error("Not connected");
      const { blobId } = await upload(file);
      return actor.addGalleryPhoto({ caption, blobId });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["galleryPhotos"] });
    },
  });
}

export function useRemoveGalleryPhoto() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor) throw new Error("Not connected");
      return actor.removeGalleryPhoto(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["galleryPhotos"] });
    },
  });
}
