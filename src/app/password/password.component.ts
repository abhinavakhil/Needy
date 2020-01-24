import { Component, OnInit , Input} from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  passwordData: Observable<any>;
  MyphonePassword;

  // data for podium and sending user to diff page
  podiumUserdata:any;
  actualdata;
  constructor(private firestore: AngularFirestore,
              private router: Router,
              private loginservice: LoginService,
              private afs: AngularFirestore) { }

  ngOnInit() {
    this.loginservice.getData()
    .subscribe( (result) =>{
      this.actualdata = result;
       console.log(this.actualdata[0].user_id);
      
      this.afs.collection("groups_data", ref => ref.where("users","array-contains",this.actualdata[0].user_id)).valueChanges()
      .subscribe( (myresult) =>{
     this.podiumUserdata = myresult;
     return this.podiumUserdata;
    })//
  
  })
  }
 


  sendpasswordCode(formData){

          let sha1 = require('sha1');
          let sha1Password = sha1(formData.MyphonePassword);
           //  console.log(sha1Password);
          let userPhoneNumber = localStorage.getItem('key');
           console.log(userPhoneNumber);
          this.passwordData = this.firestore.collection("users",ref => ref.where('password','==' ,sha1Password)).valueChanges();
          this.passwordData.subscribe(result => {
          this.passwordData = result;
    
          // setting user id to localStorage
          localStorage.setItem('userKey', this.passwordData[0].user_id);
    
             // console.log(this.passwordData[0].phone_no);
               //console.log(this.podiumUserdata.length > 0);
              //  console.log(formData.MyphonePassword);
              //  console.log(sha1Password);
              // if podium data is present in database group_user
            
                //
              if (this.podiumUserdata.length > 0){
                // for checking if entered password matches the password typed
                   if (this.passwordData[0].password == sha1Password && this.passwordData[0].phone_no == userPhoneNumber.toString() ){
                         this.router.navigate(['/view-podium']);
                      }
                    }
                 else if(this.podiumUserdata.length == 0){
                    this.router.navigate(['/blank']);
                }
              
          
    
          })
      }







// sendpasswordCode(formData){

//       let sha1 = require('sha1');
//       let sha1Password = sha1(formData.MyphonePassword);
//        //  console.log(sha1Password);
//       let userPhoneNumber = localStorage.getItem('key');
//       // console.log(userPhoneNumber);
//       this.passwordData = this.firestore.collection("users",ref => ref.where('password','==' ,sha1Password)).valueChanges();
//       this.passwordData.subscribe(result => {
//       this.passwordData = result;

//       // setting user id to localStorage
//       localStorage.setItem('userKey', this.passwordData[0].user_id);

//       // console.log(this.passwordData[0].phone_no);

//       this.loginservice.getData()
//       .subscribe( (result) =>{
//         this.actualdata = result;
//         //console.log(this.actualdata);

//         this.afs.collection("groups_data", ref => ref.where("users","array-contains",this.actualdata[0].user_id)).valueChanges()
//         .subscribe( (myresult) =>{
//           this.podiumUserdata = myresult;
//            //console.log(this.podiumUserdata.length > 0);
//           // if podium data is present in database group_user
//           if (this.podiumUserdata.length > 0){
//             // for checking if entered password matches the password typed
//                if (this.passwordData[0].password == sha1Password && this.passwordData[0].phone_no == userPhoneNumber.toString() ){
//                    this.router.navigate(['/view-podium']);
//                   }
//             } else {
//                 this.router.navigate(['/blank']);
//             }

//         })

//       })


//       })
//   }

}
