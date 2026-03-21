import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Output {
    id: bigint;
    caption: string;
    blobId: string;
}
export interface Input__1 {
    caption: string;
    blobId: string;
}
export interface Input {
    name: string;
    email: string;
    message: string;
    phone: string;
}
export interface backendInterface {
    addGalleryPhoto(input: Input__1): Promise<string>;
    getAllContactSubmissions(): Promise<Array<Input>>;
    getAllGalleryPhotos(): Promise<Array<Output>>;
    getContactSubmission(id: string): Promise<Input>;
    removeGalleryPhoto(id: bigint): Promise<void>;
    submitForm(input: Input): Promise<void>;
}
