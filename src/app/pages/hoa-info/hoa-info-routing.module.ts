import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HoaInfoComponent } from './hoa-info.component';
import { HoaBasicInfoComponent} from './hoa-basic-info/hoa-basic-info.component';
import { HoaReserveComponentsComponent} from './hoa-reserve-components/hoa-reserve-components.component';
// import { FormInputsComponent } from './reserve-components/form-inputs.component';
// import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
// import { DatepickerComponent } from './datepicker/datepicker.component';
// import { ButtonsComponent } from './buttons/buttons.component';

const routes: Routes = [
  {
    path: '',
    component: HoaInfoComponent,
    children: [
      {
        path: 'basic-info',
        component: HoaBasicInfoComponent,
      },
      {
        path: 'reserve-components',
        component: HoaReserveComponentsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class HoaInfoRoutingModule {
}

