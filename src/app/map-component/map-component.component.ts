import { Component, inject } from '@angular/core';
// Import the Country Info Interface to ensure we get proper types
import { Countryinformation } from '../countryinformation';
// Import the Country Info Component for the aside element
import { CountryInfoComponentComponent } from '../country-info-component/country-info-component.component';
// Import the API service
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-map-component',
  standalone: true,
  imports: [CountryInfoComponentComponent],
  templateUrl: './map-component.component.html',
  styleUrl: './map-component.component.css'
})
export class MapComponentComponent {

  countryInformationList: Countryinformation = { // Create blank object list that matches the countryinformation.ts interface
    countryName: "",
    countryCapital: "",
    countryRegion: "",
    incomeLevel: "",
    latitude: "",
    longitude: "",

  }
  
  ApiServiceService: ApiServiceService = inject(ApiServiceService)


  onMouseClick(event: MouseEvent) {
    // This method doesn't work because the countryID is declared as a block level variable and can't be accessed outside of the block. (this) will instead refer to the svgelement and not the map component. 

    // document.querySelectorAll('path').forEach(path => {
    //   path.addEventListener("click", function(){
    //     let countryID = this.id
    //     console.log(countryID)
    //   })
    // })



    const countryPath = event.target as SVGPathElement
    const countryID = countryPath.id;
    this.renderCountryData(countryID)
  }


  renderCountryData(countryID: string) {
    this.ApiServiceService.getCountryInfo(countryID).subscribe({next: response => {
      const countryData = response[1][0]
      this.countryInformationList = {  // Update blank object list to display the returned API data
        countryName: countryData.name,
        countryCapital: countryData.capitalCity,
        countryRegion: countryData.region.value,
        incomeLevel: countryData.incomeLevel.value,
        latitude: countryData.latitude,
        longitude: countryData.longitude,
      }

    }})
  }

  constructor() {
  }
}