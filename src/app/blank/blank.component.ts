import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularFirestore , AngularFirestoreCollection} from 'angularfire2/firestore';
import { PodiumItems } from './podiumItems.model';
import { Observable } from 'rxjs';
import { stringify } from '@angular/core/src/util';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.css']
})
export class BlankComponent implements OnInit {
  podiumImage ='../../assets/Podium_Background_2.png';
 podiumCollectionref : AngularFirestoreCollection;
 items:Observable<PodiumItems[]>;
//  userId;
 myitems;
 createList: AngularFirestoreCollection<PodiumItems>;

/// new data
// Observable<any> for removing 0 error
actualdata:any;






 podiumGroup:string;
  constructor(config: NgbModalConfig,
              private modalService: NgbModal,
              private afs: AngularFirestore,
              private loginservice: LoginService,
              private router: Router) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;

    //

  }
  ngOnInit() {
    this.createList =  this.afs.collection('groups_data');
    this.items = this.createList.valueChanges();

  }




  GotoPodiumView(){

  let date = require('date-and-time');
  let now = new Date();
  let mydate = date.format(now, 'YYYY-MM-DD HH:mm:ss');

  //calling getdata service for user id and username
          this.loginservice.getData()
                 .subscribe((result)=>{
                   this.actualdata = result;
                   //console.log(this.actualdata);

                   //for adding values to firestore
                   this.myitems = this.createList.add({'created_at':mydate,'created_by':this.actualdata[0].user_name, 'group_description':'',
                   'group_image':'','group_name':this.podiumGroup,'last_message_added':1234,'open':1,'type_id':0,'updated_at':mydate,'userid':this.actualdata[0].user_id,'users':[this.actualdata[0].user_id]});
                   //console.log(this.myitems);

                  //for getting user with id from user
                  this.afs.collection("groups_data",ref => ref.where("users","array-contains",this.actualdata[0].user_id)).valueChanges()
                  .subscribe( (myresult) =>{
                    //console.log(myresult);
                  } )

                   //navigate user
                   this.router.navigate(['/view-podium']);

                 });

  ///

  }




  open(content) {
    this.modalService.open(content);
  }

}
