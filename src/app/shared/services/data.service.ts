import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from '../models/app.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private isAdminLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private firestore: AngularFirestore) { }

  getProjects() {
    return this.firestore.collection('Projects', ref => ref.limit(10)).snapshotChanges()
    .pipe(map(document => {
      return document.map((changes: any) => {
        return {
          id: changes.payload.doc.id,
          ...changes.payload.doc.data(),
        }
      })
    }))
  }

  getProject(id: string, project: Project) {
    return this.firestore.collection('Projects').doc(id).set(project);
  }

  addProject(project: Project) {
    return this.firestore.collection('Projects').add(project);
  }

  deleteProject(id: string) {
    return this.firestore.collection('Projects').doc(id).delete();
  }

  login() {
    localStorage.setItem('isLoggedin', 'true');
    this.isAdminLoggedIn.next(true);

  }

  logout() {
    localStorage.setItem('isLoggedin', null);
    this.isAdminLoggedIn.next(false);
  }

  isUserLoggedIn$(): Observable<boolean> {
    return this.isAdminLoggedIn.asObservable();
  }
}
