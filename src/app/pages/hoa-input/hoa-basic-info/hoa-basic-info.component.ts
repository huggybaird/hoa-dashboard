import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {HoaService, Config, Hoa} from '../hoa.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'ngx-hoa-basic-info',
  styleUrls: ['./hoa-basic-info.component.scss'],
  templateUrl: './hoa-basic-info.component.html',
  providers: [HoaService],
})
export class HoaBasicInfoComponent implements OnInit {
  states: State[];
  config: Config[];
  propertyTypes: PropertyType[];
  hoa: Hoa = {id:	-99,
    userId: -99,
    name:	null,
    propertyType:	null,
    propertyTypeDesc:	null,
    floorCount:	null,
    sqFtPerUnit: null,
    unitCount: null,
    yearBuilt: null,
    hoaWebsiteUrl: null,
    address1:	'',
    address2:	'',
    city:	'',
    state:	'',
    zip:	'',
  };

  api_url: string;

  hoaFormSubmitted = false;
  hoaAddressFormSubmitted = false;

  hoaForm = this.fb.group({
    hoaName: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
    hoaPropertyType: ['', Validators.required],
    otherPropertyTypeDescription: [''],
    numberOfFloors: [''],
    yearBuilt: ['', Validators.required],
    numberOfUnits: ['', Validators.required],
    averageSqFtPerUnit: ['', Validators.required],
    // address: this.fb.group({
    //   address1: ['', Validators.required],
    //   address2: [''],
    //   city: ['', Validators.required],
    //   state: ['', Validators.required],
    //   zip: ['', Validators.required]
    // }),
  });
  hoaAddressForm = this.fb.group({
    address1: ['', Validators.required],
    address2: [''],
    city: ['', Validators.required],
    stateList: ['', Validators.required],
    state: ['', Validators.required],
    zip: ['', Validators.required],
  });
  // hoaForm = new FormGroup({
  //   hoaName: new FormControl(''),
  //   hoaPropertyType: new FormControl(''),
  //   otherPropertyTypeDescription: new FormControl(''),
  //   yearBuilt: new FormControl(''),
  //   numberOfUnits: new FormControl(''),
  //   averageSqFtPerUnit: new FormControl(''),
  //   address: new FormGroup({
  //     address1: new FormControl(''),
  //     address2: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl(''),
  //   }),
  // });
  // hoaName = new FormControl('');
  // hoaPropertyType = new FormControl('');
  // otherPropertyTypeDescription = new FormControl('');

  updateHoaName() {
    this.hoaForm.controls['hoaName'].setValue('Nancy');
  }

  onHoaFormSubmit() {

    // stop here if form is invalid
    if (this.hoaForm.invalid) {
      return;
    }
    this.hoaFormSubmitted = true;
    this.hoa.name = this.hoaForm.controls['hoaName'].value;
    this.hoa.propertyType =	this.hoaForm.controls['hoaPropertyType'].value;
    this.hoa.propertyTypeDesc =	this.hoaForm.controls['otherPropertyTypeDescription'].value;
    this.hoa.floorCount =	this.hoaForm.controls['numberOfFloors'].value;
    this.hoa.sqFtPerUnit = this.hoaForm.controls['averageSqFtPerUnit'].value;
    this.hoa.unitCount =	this.hoaForm.controls['numberOfUnits'].value;
    this.hoa.yearBuilt =		this.hoaForm.controls['yearBuilt'].value;
    this.hoa.hoaWebsiteUrl =	''; // this.hoaForm.controls['hoaWebsiteUrl'].value;

    this.hoaService.saveHoa(this.hoa).subscribe(
      (response) =>  {
          this.hoa = response;
          // console.log(response);
          // console.log('exiting saveHoa()');
         },
    );
    // console.warn(this.hoaForm.value);
    alert('SUCCESS HOA Info!! :-)');
  }
  onHoaAddressSubmit() {
    this.hoaAddressFormSubmitted = true;

    // stop here if form is invalid
    if (this.hoaAddressForm.invalid) {
      return;
    }
    console.warn(this.hoaAddressForm.value);
    alert('SUCCESS ADDRESS!! :-)');
  }

  onPropertyTypeChange() {
    const a = this.hoaForm.controls['hoaPropertyType'].value;
    if (a === 'Other')
    return 1;

    return null;
  }

  ngOnInit() {
    this.hoaService.getConfigs().subscribe(
      (configs) =>  {
        // console.log('received getConfig()');
        for (const config of configs){
          if (config.name === 'states') {
            this.states = JSON.parse(config.value);
          }
          if (config.name === 'PropertyType') {
            this.propertyTypes = JSON.parse(config.value);
          }
        }
        //  console.log('exiting getConfig()');
         },
    );

    this.api_url = environment.apiUrl;
  }
  constructor(private fb: FormBuilder, private hoaService: HoaService) { }



}
export interface State {
  state: string;
  stateCode: string;
  census: number;
  population2010: string;
  population2018: string;
}
 // {
  //   "state": "Alabama",
  //   "census": 4779736,
  //   "stateCode": "AL",
  //   "population2010": 4785448,
  //   "population2018": 4887871
  // }
export interface PropertyType {
  name: string;
}
// [
//   {"name": "High Rise Condo (5+ floors)"},
//   {"name": "Low Rise Condo (2 to 4 floors)"},
//   {"name": "Townhome / Shared Wall(s)"},
//   {"name": "Single Family"},
//   {"name": "Mobile / Manufactured"},
//   {"name": "Other"}
// ]
