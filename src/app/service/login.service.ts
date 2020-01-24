import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userData;
  userLoginNumber = localStorage.getItem('key');
  constructor(private firestore:AngularFirestore){
    this.userData = this.firestore.collection("users",ref => ref.where('phone_no','==',this.userLoginNumber))
      .valueChanges();
                    
    }

  getData(){   
    return this.userData;
  }

  //groups_data
  // getUserPodiumdata(){
  //   let groupUser =  this.firestore.collection("groups_data",ref => ref.where("users","array-contains","userid")).valueChanges();
  //   return groupUser;
  // }

}
