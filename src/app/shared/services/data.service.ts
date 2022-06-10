import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: AngularFirestore) { }

  getProjects() {
    return this.firestore.collection('Projects', ref => ref.limit(50)).valueChanges();
  }
}
