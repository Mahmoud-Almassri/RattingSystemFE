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
  selector: 'app-addsession',
  templateUrl: './addsession.component.html',
  styleUrls: ['./addsession.component.css']
})
export class AddsessionComponent implements OnInit {

  // sessionVideoPath: string;

  SessionForm = new FormGroup({
    SessionName: new FormControl(''),
    PresenterName: new FormControl(''),
    // SessionVideoPath: new FormControl(''),
  });
  // SessionVideoForm = new FormGroup({
  //   SessionVideo: new FormControl(''),
  // });
  constructor(
    private router: Router,
    private baseService: BaseService,
    public notification: NotificationService,
    private dashboardService: BaseService, 
    private spinner: NgxSpinnerService,
    private authService: AuthorizeService,
    ) { }
  ngOnInit(): void {
    
  }

  submitForm(): void {
    if (this.SessionForm.invalid){
      this.notification.showNotification('Please fill all required fields', 'warning');
    }
    else {
      this.spinner.show();
      const sessionForm = this.SessionForm.value;
      // const formData = new FormData();
      // formData.append('file', this.SessionVideoForm.get('SessionVideo').value);
      // const sesstionForm = this.SessionForm.value;
      // this.baseService.postVideoItem(Controllers.Session, Actions.UploadSessionVideo, formData).subscribe(response => {
      //   sesstionForm.value.filePath = response.PresenterRateDegree;
        this.baseService.postItem(Controllers.Session, Actions.AddSession, sessionForm).subscribe(response => {
          this.SessionForm.reset();
          this.notification.showNotification('Your session added successfully', 'success');
          this.spinner.hide();
         }, error => {
           console.log(error);
           if(error.status === 400){
             this.notification.showNotification('Something went wrong', 'danger');
           }
           
           this.spinner.hide();
         });
        
      //   this.spinner.hide();
      // }, error => {
      //   console.log(error);
      //   if(error.status === 400){
      //     this.notification.showNotification('Somthing went wrong', 'danger');
      //   }
      //   this.spinner.hide();
      // });
    }
  }
  

}
