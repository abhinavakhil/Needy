import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-get-food",
  templateUrl: "./get-food.component.html",
  styleUrls: ["./get-food.component.css"]
})
export class GetFoodComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  showDetail() {
    this.router.navigate(["/food-detail"]);
  }
}
