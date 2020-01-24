import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";
import { environment } from "src/environments/environment";
import { WindowService } from "../window.service";
import { Router } from "@angular/router";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "angularfire2/firestore";

@Component({
  selector: "app-setpassword",
  templateUrl: "./setpassword.component.html",
  styleUrls: ["./setpassword.component.css"]
})
export class SetpasswordComponent implements OnInit {
  windowRef: any;
  verificationCode: string;
  user: any;

  phoneNumber;
  userName;
  userPassword;
  userDataCollection: AngularFirestoreCollection;
  // todo$: Observable<Todo[]>;
  constructor(
    private win: WindowService,
    private router: Router,
    private afs: AngularFirestore
  ) {}

  ngOnInit() {
    // firebase.initializeApp(environment.firebase);
    this.windowRef = this.win.windowRef;
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container"
    );
    this.windowRef.recaptchaVerifier.render();
  }

  submitForm(formData) {
    let appVerifier = this.windowRef.recaptchaVerifier;
    // *getting input value of number/
    this.phoneNumber = formData.phoneNumber;
    this.userName = formData.userName;
    this.userPassword = formData.password;
    console.log(this.phoneNumber);
    firebase
      .auth()
      .signInWithPhoneNumber(this.phoneNumber, appVerifier)
      .then(result => {
        this.windowRef.confirmationResult = result;
      })
      .catch(error => console.log(error));
  }

  verifyLoginCode(myform) {
    let verificationCode =
      myform.formvalue1 +
      myform.formvalue2 +
      myform.formvalue3 +
      myform.formvalue4 +
      myform.formvalue5 +
      myform.formvalue6;
    console.log(verificationCode);
    //confirming the user code
    this.windowRef.confirmationResult
      .confirm(verificationCode)
      .then(result => {
        this.user = result.user;
        // adding user data to firestore db
        this.router.navigate(["/"]);
      })
      .catch(error => {
        console.log(error, "Incorrect code entered");
        alert(error + "please enter the correct otp");
      });
    this.userDataCollection.add({
      mobileNo: this.phoneNumber,
      name: this.userName,
      password: this.userPassword
    });
  }
}
