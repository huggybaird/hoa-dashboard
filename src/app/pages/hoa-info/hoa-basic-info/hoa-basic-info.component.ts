import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {HoaService} from '../hoa.service';

// import { HttpClient } from '@angular/common/http';
import { States } from '../../hoa-data/states';
// import {Hoa} from '../hoa';

@Component({
  selector: 'ngx-hoa-basic-info',
  styleUrls: ['./hoa-basic-info.component.scss'],
  templateUrl: './hoa-basic-info.component.html',
  providers: [HoaService],
})
export class HoaBasicInfoComponent implements OnInit {
  states: States[];
  // states: States[] =  [{
  //   stateCode: 'AL',
  //   stateName: 'Alabama',
  //  },
  //  {
  //   stateCode: 'OH',
  //   stateName: 'Ohio',
  //  },
  //  {
  //   stateCode: 'NY',
  //   stateName: 'New York',
  //  }];
  //  states =  [{
  //   stateCode: 'AL',
  //   stateName: 'Alabama',
  //  },
  //  {
  //   stateCode: 'OH',
  //   stateName: 'Ohio',
  //  },
  //  {
  //   stateCode: 'NY',
  //   stateName: 'New York',
  //  }];
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
    this.hoaFormSubmitted = true;

    // stop here if form is invalid
    if (this.hoaForm.invalid) {
      return;
    }
    console.warn(this.hoaForm.value);
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

  getStates(): void {
    // return;
    const data = require('../../../../assets/data/states.json');
    this.states = data;
    console.warn('states = ' + this.states);
    // console.warn(this.states);
    // console.warn(data);
    // for (const num of data) {
    //     console.warn(num);
    //     const a = num['stateName'];
    //     const b = num['stateCode'];
    //     const c = a + b;
    // }
    return;
    // let myStates = this.hoaService.getStates();
    // console.warn(myStates);
    // return;
    // this.hoaService.getStates()
    //   .subscribe(states => (myStates = states));
    //   const myMessage = this.hoaService.getMessage();
    //   // console.warn(myMessage);
  }
  onPropertyTypeChange() {
    return null;
  }

  ngOnInit() {
    this.getStates();
  }
  constructor(private fb: FormBuilder, private hoaService: HoaService) { 
    this.hoaService.getStates();
  }
}
