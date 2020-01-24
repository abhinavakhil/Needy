import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ViewPodiumComponent } from "./view-podium/view-podium.component";
import { LoginComponent } from "./login/login.component";
import { PasswordComponent } from "./password/password.component";
import { BlankComponent } from "./blank/blank.component";
import { HomeComponent } from "./home/home.component";
import { SetpasswordComponent } from "./setpassword/setpassword.component";
import { DonateFoodComponent } from "./donate-food/donate-food.component";
import { GetFoodComponent } from "./get-food/get-food.component";
import { FoodDetailComponent } from "./food-detail/food-detail.component";

const routes: Routes = [
  { path: "view-podium", component: ViewPodiumComponent },
  { path: "view-podium/:id", component: ViewPodiumComponent },
  { path: "home", component: HomeComponent },
  { path: "donate-food", component: DonateFoodComponent },
  { path: "get-food", component: GetFoodComponent },
  { path: "food-detail", component: FoodDetailComponent },
  { path: "password", component: PasswordComponent },
  { path: "blank", component: BlankComponent },
  { path: "signup", component: SetpasswordComponent },
  { path: "", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
