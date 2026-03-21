import Map "mo:core/Map";
import Nat "mo:core/Nat";

module {
  type ContactSubmission = {
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
  };

  type OldActor = {
    submissions : Map.Map<Nat, ContactSubmission>;
    nextId : Nat;
  };

  type NewActor = {
    contactSubmissions : Map.Map<Nat, ContactSubmission>;
    galleryPhotos : Map.Map<Nat, { blobId : Text; caption : Text }>;
    nextContactSubmissionId : Nat;
    nextGalleryPhotoId : Nat;
  };

  public func run(old : OldActor) : NewActor {
    {
      contactSubmissions = old.submissions;
      galleryPhotos = Map.empty<Nat, { blobId : Text; caption : Text }>();
      nextContactSubmissionId = old.nextId;
      nextGalleryPhotoId = 0;
    };
  };
};
