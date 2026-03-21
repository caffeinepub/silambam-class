import Text "mo:core/Text";
import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";

import List "mo:core/List";
import Principal "mo:core/Principal";
import Order "mo:core/Order";
import MixinStorage "blob-storage/Mixin";


actor {
  include MixinStorage();

  module ContactSubmission {
    public type Input = {
      name : Text;
      email : Text;
      phone : Text;
      message : Text;
    };

    public type Output = Input;
    public type Id = Nat;

    public func compare(s1 : Input, s2 : Input) : Order.Order {
      Text.compare(s1.email, s2.email);
    };
  };

  module GalleryPhoto {
    public type Input = {
      blobId : Text;
      caption : Text;
    };

    public type Output = {
      id : Nat;
      blobId : Text;
      caption : Text;
    };

    public type Id = Nat;
  };

  module Id {
    public type Counter = Nat;
    public type Id = Nat;

    public func getNextId(counter : Counter) : (Text, Id, Counter) {
      if (counter == 2 ** 64 - 1) {
        (counter.toText(), 0, 1);
      } else {
        (counter.toText(), counter, counter + 1);
      };
    };
  };

  func parseNat(text : Text) : Nat {
    switch (Nat.fromText(text)) {
      case (null) { Runtime.trap("Invalid ID: " # text) };
      case (?nat) { nat };
    };
  };

  var nextContactSubmissionId : Id.Counter = 0;
  var nextGalleryPhotoId : Id.Counter = 0;

  let contactSubmissions = Map.empty<ContactSubmission.Id, ContactSubmission.Input>();
  let galleryPhotos = Map.empty<GalleryPhoto.Id, GalleryPhoto.Input>();

  func isAdmin(caller : Principal) : Bool {
    caller.isAnonymous();
  };

  public shared ({ caller }) func submitForm(input : ContactSubmission.Input) : async () {
    let (id, id_int, new_counter) = Id.getNextId(nextContactSubmissionId);
    nextContactSubmissionId := new_counter;
    contactSubmissions.add(id_int, input);
  };

  public shared ({ caller }) func addGalleryPhoto(input : GalleryPhoto.Input) : async Text {
    assert (isAdmin(caller));
    let (id, id_int, new_counter) = Id.getNextId(nextGalleryPhotoId);
    nextGalleryPhotoId := new_counter;
    galleryPhotos.add(id_int, input);
    id;
  };

  public shared ({ caller }) func removeGalleryPhoto(id : Nat) : async () {
    assert (isAdmin(caller));
    galleryPhotos.remove(id);
  };

  public query ({ caller }) func getContactSubmission(id : Text) : async ContactSubmission.Input {
    let id_int = parseNat(id);
    switch (contactSubmissions.get(id_int)) {
      case (null) { Runtime.trap("Submission does not exist") };
      case (?submission) { submission };
    };
  };

  public query ({ caller }) func getAllContactSubmissions() : async [ContactSubmission.Input] {
    assert (isAdmin(caller));
    contactSubmissions.values().toArray().sort();
  };

  public query ({ caller }) func getAllGalleryPhotos() : async [GalleryPhoto.Output] {
    assert (isAdmin(caller));
    let list = List.empty<GalleryPhoto.Output>();

    for ((id, { blobId; caption }) in galleryPhotos.entries()) {
      list.add({
        id;
        blobId;
        caption;
      });
    };
    list.toArray();
  };
};
