import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryInfoComponentComponent } from './country-info-component.component';

describe('CountryInfoComponentComponent', () => {
  let component: CountryInfoComponentComponent;
  let fixture: ComponentFixture<CountryInfoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryInfoComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryInfoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
