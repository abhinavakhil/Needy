import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { SetpasswordComponent } from "./setpassword/setpassword.component";
import { BlankComponent } from "./blank/blank.component";
import { ViewPodiumComponent } from "./view-podium/view-podium.component";
import { AddPodiumComponent } from "./add-podium/add-podium.component";
import { AddBadgesComponent } from "./add-badges/add-badges.component";
import { BadgeViewComponent } from "./badge-view/badge-view.component";
import { AlbumsComponent } from "./albums/albums.component";
import { PodiumlistComponent } from "./podiumlist/podiumlist.component";
import { PodiumFeedComponent } from "./podium-feed/podium-feed.component";
import { ViewlistComponent } from "./viewlist/viewlist.component";
import { HttpClientModule } from "@angular/common/http";
// firebase Modules
import { AngularFireModule } from "@angular/fire";
//import * as firebase from 'firebase';
import { environment } from "../environments/environment";
import { SimplebarAngularModule } from "simplebar-angular";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { PasswordComponent } from "./password/password.component";
import { UserdataService } from "./service/userdata.service";
import { LoginService } from "./service/login.service";
import { NavigationComponent } from "./navigation/navigation.component";
import { PostService } from "./service/post.service";
import { CookieService } from "ngx-cookie-service";
import { HomeComponent } from "./home/home.component";
import { DonateFoodComponent } from "./donate-food/donate-food.component";
import { CountriesService } from "./service/countries.service";
import { GetFoodComponent } from "./get-food/get-food.component";
import { FoodDetailComponent } from "./food-detail/food-detail.component";
import { SelfServeComponent } from "./self-serve/self-serve.component";

// config scroll
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SetpasswordComponent,
    BlankComponent,
    ViewPodiumComponent,
    AddPodiumComponent,
    AddBadgesComponent,
    BadgeViewComponent,
    AlbumsComponent,
    PodiumlistComponent,
    PodiumFeedComponent,
    ViewlistComponent,
    PasswordComponent,
    NavigationComponent,
    HomeComponent,
    DonateFoodComponent,
    GetFoodComponent,
    FoodDetailComponent,
    SelfServeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule,
    PerfectScrollbarModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    SimplebarAngularModule
  ],
  providers: [
    AngularFirestoreModule,
    UserdataService,
    LoginService,
    PostService,
    CookieService,
    CountriesService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
