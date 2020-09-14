import { Injectable } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class ItemsService {
  constructor(private firestore: AngularFirestore) {}

  // form = new FormGroup({
  //   itemName: new FormControl(""),
  //   itemType: new FormControl(""),
  //   itemAmount: new FormControl(""),
  //   unitPrice: new FormControl("")
  // });

  collection = this.getItems();
  public items = [];

  //Firestore CRUD actions example
  createItem(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("items")
        .add(data)
        .then(res => {}, err => reject(err));
    });
  }

  updateItem(data) {
    return this.firestore
      .collection("items")
      .doc(data.payload.doc.id)
      .set({ completed: true }, { merge: true });
  }

  getItems() {
    return this.firestore.collection("items").snapshotChanges();
  }

  deleteItem(data) {
    return this.firestore
      .collection("items")
      .doc(data.payload.doc.id)
      .delete();
  }

  public returnById(id: string) {

    //return this.fireStore.collection('users').snapshotChanges();
    let item;

  this.firestore.collection('items').snapshotChanges().subscribe((res) => {
    res.forEach(r => {
      item = r.payload.doc.data();

      if(item["id"] == id){

        this.items.push({
                  id: r.payload.doc.id,
                  data: r.payload.doc.data()
                });

      }
      
    })
  });

  return this.items;
  }
}
