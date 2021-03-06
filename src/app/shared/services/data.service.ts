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
    return this.firestore.collection('Projects').snapshotChanges()
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

  login(email: string, password: string): boolean {
    if(email == 'admin@peoplex.com' && password == 'admin@123') {
      localStorage.setItem('isLoggedin', 'true');
      this.isAdminLoggedIn.next(true);
      return true;
    }

    return false;

  }

  logout() {
    localStorage.setItem('isLoggedin', null);
    this.isAdminLoggedIn.next(false);
  }

  isUserLoggedIn$(): Observable<boolean> {
    localStorage.getItem('isLoggedin') == 'true' ? this.isAdminLoggedIn.next(true) : this.isAdminLoggedIn.next(false);
    return this.isAdminLoggedIn.asObservable();
  }
}
