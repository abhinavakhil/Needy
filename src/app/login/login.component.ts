import { Component, OnInit, Input } from "@angular/core";
import * as firebase from "firebase";
import { environment } from "src/environments/environment";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { LoginService } from "../service/login.service";
import { AngularFireAuth } from "@angular/fire/auth";
import { routerNgProbeToken } from "@angular/router/src/router_module";
import { User } from "../models/user";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  myusername: string = "";
  myplace: string = "";
  // user = firebase.auth().currentUser;
  // name;
  // uid;
  userData: AngularFirestoreCollection<User>;
  item: Observable<User[]>;
  userPassword;

  constructor(private afs: AngularFirestore, private router: Router) {}

  ngOnInit() {
    // console.log(this.user);
  }

  loginUser(formdata) {
    // User Mobile No
    this.userData = this.afs.collection("Users", ref =>
      ref.where("mobileNo", "==", formdata.MyphoneNumber)
    );
    // this.item = this.userData.snapshotChanges();

    // User passsword
    this.userPassword = this.afs
      .collection("Users", ref =>
        ref.where("password", "==", formdata.MyphonePassword)
      )
      .valueChanges();

    console.log(this.userData + this.userPassword);
  }
  // this.router.navigate(["/password"]);
}
