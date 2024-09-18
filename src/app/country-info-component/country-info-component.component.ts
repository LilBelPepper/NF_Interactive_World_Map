import { Component, Input } from '@angular/core';
import { Countryinformation } from '../countryinformation';

@Component({
  selector: 'app-country-info-component',
  standalone: true,
  imports: [],
  templateUrl: './country-info-component.component.html',
  styleUrl: './country-info-component.component.css'
})
export class CountryInfoComponentComponent {
  @Input() countryInformation!: Countryinformation;
  // Add the "!" because the input is expecting a value to be added. There is no default value currently.
}
