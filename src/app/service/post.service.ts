import { Injectable,OnInit } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class PostService implements OnInit{
  postCollection: AngularFirestoreCollection<Post>;
  items:Observable<Post[]>;
  public actualdata:any[]=[];
  ///
  MyDataId;

  data:Observable<any>;
  PodiumUser:Observable<any>;
  constructor(private afs:AngularFirestore,
              private loginservice:LoginService) {
    // this.items = this.afs.collection<Post>('topics_database',ref=>ref.where('groupId','==','x95OczRnaygr1S22ekE5')).valueChanges();
      this.MyDataId = localStorage.getItem('myUserId');
      this.postCollection = this.afs.collection<Post>('topic_database',ref=>ref.where('groupId','==','KTzKM1B8J2Sl9ScHGEOj'));
      this.items = this.postCollection.valueChanges();
      ///console.log(this.items);
  }

  ngOnInit(){

  }

  getTextPost(){
   return this.items;
  }

  // getPodiumGroupData(){  
  //   this.loginservice.getData().subscribe(
  //     (result) =>{
  //     let item = result;
  //    this.actualdata = item.value;
  //    console.log(this.actualdata);
       
  //     this.data = this.afs.collection("groups_data",ref => ref.where("users","array-contains",this.actualdata[0].user_id))
  //       .snapshotChanges();  
  //     });
  //     return this.data;
  //  }


}
