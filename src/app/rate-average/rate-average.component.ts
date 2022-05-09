import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as Chartist from 'chartist';
import { NgxSpinnerService } from 'ngx-spinner';
import { Actions, Controllers } from '../../shared/global-variables/api-config';
import { NotificationService } from '../../shared/services/notification.service';
import { AuthorizeService } from '../../auth/authorize.service';
import {  DashboardResponse } from '../../shared/models/dashboard-model';
import { BaseService } from '../../shared/services/base.service';
@Component({
  selector: 'app-rate-average',
  templateUrl: './rate-average.component.html',
  styleUrls: ['./rate-average.component.css']
})
export class RateAverageComponent implements OnInit {

  RatesAverage: any[];
  displayedColumns: string[] = ['PresenterName', 'SessionName', 'AveragePresenterRates', 'SessionRatesAverage'];
  constructor(
    private router: Router,
    private baseService: BaseService,
    public notification: NotificationService,
    private dashboardService: BaseService, 
    private spinner: NgxSpinnerService,
    private authService: AuthorizeService,
  ) { }

  ngOnInit(): void {
    this.baseService.GetItem(Controllers.Rate, Actions.ShowAverageSessionRates).subscribe(response => {
      this.RatesAverage = response;
      this.spinner.hide();
     }, error => {
       console.log(error);
       if(error.status === 400){
         this.notification.showNotification('Something went wrong', 'danger');
       }
       
       this.spinner.hide();
     });
  }

}
