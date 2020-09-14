import { Injectable } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class CharactersService {
  constructor(private firestore: AngularFirestore) {}

  // form = new FormGroup({
  //   itemName: new FormControl(""),
  //   itemType: new FormControl(""),
  //   itemAmount: new FormControl(""),
  //   unitPrice: new FormControl("")
  // });

  collection = this.getCharacters();

  //Firestore CRUD actions example
  createCharacter(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("characters")
        .add(data)
        .then(res => {}, err => reject(err));
    });
  }

  updateCharacter(data) {
    return this.firestore
      .collection("characters")
      .doc(data.payload.doc.id)
      .set({ completed: true }, { merge: true });
  }

  getCharacters() {
    return this.firestore.collection("characters").snapshotChanges();
  }

  deleteCharacter(data) {
    return this.firestore
      .collection("characters")
      .doc(data.payload.doc.id)
      .delete();
  }
}
