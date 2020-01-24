import { Injectable } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection} from 'angularfire2/firestore';
import { LoginService } from './login.service';
import { PodiumItems } from '../blank/podiumItems.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AnyARecord } from 'dns';
@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  actualdata:Observable<any>;
  
  itemsCollection:AngularFirestoreCollection<PodiumItems>;
  items:Observable<PodiumItems[]>;

  constructor(private afs:AngularFirestore,
              private loginservice:LoginService) {
    this.actualdata = this.loginservice.getData();
    this.actualdata.subscribe(
      (result) =>{
        this.actualdata = result;
      }
    );
    this.items = this.afs.collection("groups_data",ref => ref.where("users","array-contains",this.actualdata[0].user_id)).snapshotChanges()
    .pipe(map(changes =>{
      return changes.map(a =>{
        const data = a.payload.doc.data() as PodiumItems
        const id = a.payload.doc.id;
        return {id, ...data};
      })
    }));


   
}
  getPodiumData(){
  return this.items;
   }

}


