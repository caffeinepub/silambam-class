import Text "mo:core/Text";
import Map "mo:core/Map";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";
import Iter "mo:core/Iter";

actor {
  type ContactSubmission = {
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
  };

  module ContactSubmission {
    public func compare(s1 : ContactSubmission, s2 : ContactSubmission) : Order.Order {
      Text.compare(s1.email, s2.email);
    };
  };

  var nextId = 0;
  let submissions = Map.empty<Nat, ContactSubmission>();

  public shared ({ caller }) func submitForm(name : Text, email : Text, phone : Text, message : Text) : async () {
    let id = nextId;
    nextId += 1;

    let submission : ContactSubmission = {
      name;
      email;
      phone;
      message;
    };

    submissions.add(id, submission);
  };

  public query ({ caller }) func getSubmission(id : Nat) : async ContactSubmission {
    switch (submissions.get(id)) {
      case (null) { Runtime.trap("Submission does not exist") };
      case (?submission) { submission };
    };
  };

  public query ({ caller }) func getAllSubmissions() : async [ContactSubmission] {
    submissions.values().toArray().sort();
  };
};
