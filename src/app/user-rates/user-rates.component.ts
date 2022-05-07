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
  selector: 'app-user-rates',
  templateUrl: './user-rates.component.html',
  styleUrls: ['./user-rates.component.css']
})
export class UserRatesComponent implements OnInit {

  userRates: any[];
  constructor(private router: Router,
    private baseService: BaseService,
    public notification: NotificationService,
    private dashboardService: BaseService, 
    private spinner: NgxSpinnerService,
    private authService: AuthorizeService,) {
    
   }
   ngAfterViewChecked(){
    var starCount=0;
    var starLableCount=0;

    var starList = document.getElementsByClassName('star') as HTMLCollectionOf<HTMLElement>;
    var StarLablelist = document.getElementsByClassName('starLable') as HTMLCollectionOf<HTMLLabelElement>;
    for(var i = 0, len = starList.length; i < len; i++)
    {
      starCount++;
      var newID='menu'+starCount;
      starList[i].id=newID;
      starLableCount++;
      var newID='menu'+starLableCount;
      StarLablelist[i].htmlFor=newID;
    }
  }
  ngOnInit(): void {
    this.baseService.GetItem(Controllers.Rate, Actions.ShowAllRates).subscribe(response => {
      this.userRates = response.rate;
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
