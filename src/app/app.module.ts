import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';

import {
  AgmCoreModule
} from '@agm/core';
import { JwtModule } from '@auth0/angular-jwt';
import { environment } from '../environments/environment';
import { SharedModule } from '../shared/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AuthorizeService } from '../auth/authorize.service';
import { AddsessionComponent } from './addsession/addsession.component';
import { RateAverageComponent } from './rate-average/rate-average.component';
import { MatTableModule } from '@angular/material/table';
import { UserRatesComponent } from './user-rates/user-rates.component';
import { AddRateComponent } from './add-rate/add-rate.component';
import { SprintChampionsComponent } from './sprint-champions/sprint-champions.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    NgxSpinnerModule,
    MatTableModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem(environment.token);
        },
        allowedDomains: [environment.apiPreLink],
        disallowedRoutes: [],
      },
    }),
    SharedModule,
  ],
  declarations: [
    AppComponent,
    AddsessionComponent,
    RateAverageComponent,
    UserRatesComponent,
    AddRateComponent,
    SprintChampionsComponent,
  ],
  providers: [AuthorizeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
