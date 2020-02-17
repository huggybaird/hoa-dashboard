import { NgModule } from '@angular/core';
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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';
import { HoaInfoRoutingModule } from './hoa-info-routing.module';
import { HoaInfoComponent } from './hoa-info.component';
import { HoaBasicInfoComponent } from './hoa-basic-info/hoa-basic-info.component';
import { HoaReserveComponentsComponent } from './hoa-reserve-components/hoa-reserve-components.component';
// import { DatepickerComponent } from './datepicker/datepicker.component';
// import { ButtonsComponent } from './buttons/buttons.component';
import { FormsModule as ngFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    HoaInfoRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    HoaInfoComponent,
    HoaBasicInfoComponent,
    HoaReserveComponentsComponent,
  ],
})
export class HoaInfoModule { }
