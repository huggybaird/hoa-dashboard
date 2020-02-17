import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { HoaInformationComponent } from './hoa-input/hoa-information/hoa-information.component';
import { HoaInfoModule } from './hoa-info/hoa-info.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    HoaInfoModule,
  ],
  declarations: [
    PagesComponent,
    HoaInformationComponent,
  ],
})
export class PagesModule {
}
