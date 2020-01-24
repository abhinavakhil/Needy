import { Component, OnInit } from "@angular/core";
import { CountriesService } from "../service/countries.service";

@Component({
  selector: "app-donate-food",
  templateUrl: "./donate-food.component.html",
  styleUrls: ["./donate-food.component.css"]
})
export class DonateFoodComponent implements OnInit {
  stateInfo: any[] = [];
  countryInfo: any[] = [];
  cityInfo: any[] = [];
  constructor(private country: CountriesService) {}

  ngOnInit() {
    const realFileBtn = <HTMLInputElement>document.getElementById("real-file");
    const customBtn = document.getElementById("custom-button");
    const customTxt = document.getElementById("custom-text");
    customBtn.addEventListener("click", function() {
      realFileBtn.click();
    });

    realFileBtn.addEventListener("change", function() {
      if (realFileBtn.value) {
        customTxt.innerHTML = realFileBtn.value.match(
          /[\/\\]([\w\d\s\.\-\(\)]+)$/
        )[1];
      } else {
        customTxt.innerHTML = "No File chosen, yet.";
      }
    });

    // countries
    this.getCountries();
  }

  getCountries() {
    this.country.allCountries().subscribe(
      data2 => {
        this.countryInfo = data2.Countries;
        //console.log('Data:', this.countryInfo);
      },
      err => console.log(err),
      () => console.log("complete")
    );
  }

  onChangeCountry(countryValue) {
    this.stateInfo = this.countryInfo[countryValue].States;
    this.cityInfo = this.stateInfo[0].Cities;
    console.log(this.cityInfo);
  }

  onChangeState(stateValue) {
    this.cityInfo = this.stateInfo[stateValue].Cities;
    //console.log(this.cityInfo);
  }
}
