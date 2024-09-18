// Create an API service for Part F. We need to use HTTP Client. 
// Take the name of the country and recieve additional information
// Trigger the API call when the country is clicked on and set a local variable to display it in the right-hand aside element 

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {


  getCountryInfo(countryID: string): Observable<any>  {
    let data = this.http.get(
      `https://api.worldbank.org/v2/country/${countryID}?format=json`); // This URL grabs all basic info, such as country name, capital, region, income level, and lat long of country
    return (data) ?? [];
  };


  constructor(private http: HttpClient) { 
  }

}
