import { Component, OnInit } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';

// import { ThemeModule } from '../../../@theme/theme.module';
// import { FormsComponent } from '../../forms/forms.component';
// // import { FormInputsComponent } from './form-inputs/form-inputs.component';
// // import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
// import { DatepickerComponent } from '../../forms/datepicker/datepicker.component';
// import { ButtonsComponent } from '../../forms/buttons/buttons.component';
// import { FormsModule as ngFormsModule } from '@angular/forms';
// import {HoaInputModule} from '../hoa-input.module';
// import the ThemeModule in your module.ts file from src/app/@theme.
import {ThemeModule} from '../../../@theme/theme.module';
@Component({
  selector: 'ngx-hoa-information',
  templateUrl: './hoa-information.component.html',
  styleUrls: ['./hoa-information.component.scss'],
})
export class HoaInformationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
