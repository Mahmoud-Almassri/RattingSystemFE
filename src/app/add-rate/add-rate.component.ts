import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Actions, Controllers } from '../../shared/global-variables/api-config';
import { NotificationService } from '../../shared/services/notification.service';
import { AuthorizeService } from '../../auth/authorize.service';
import { BaseService } from '../../shared/services/base.service';
@Component({
  selector: 'app-add-rate',
  templateUrl: './add-rate.component.html',
  styleUrls: ['./add-rate.component.css']
})
export class AddRateComponent implements OnInit {
  RateForm = new FormGroup({
    SessionRateDegree: new FormControl('', Validators.required),
    PresenterRateDegree: new FormControl('', Validators.required),
    Comment: new FormControl('', Validators.required),
    SessionId: new FormControl(''),
    UserId: new FormControl(),
  });

  public updateDate: Date;
  public isAuthorizedToView=true;
  sessions: any[];
  constructor(private router: Router,
    private baseService: BaseService,
    public notification: NotificationService,
    private dashboardService: BaseService, 
    private spinner: NgxSpinnerService,
    private authService: AuthorizeService,) { }

  ngOnInit(): void {
    this.spinner.show();
    this.baseService.GetItemWithUserId(Controllers.Session, Actions.GetAllSession,localStorage.getItem("userId")).subscribe(response => {
     this.sessions = response;
     this.spinner.hide();
    }, error => {
      console.log(error);
      if(error.status === 400){
        this.notification.showNotification('Something went wrong', 'danger');
      }
      
      this.spinner.hide();
    });
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
   submitForm(sessionId): void {
      if (this.RateForm.invalid){
        this.notification.showNotification('Please fill all required fields', 'warning');
      }
      else {
        this.spinner.show();
        this.RateForm.value.PresenterRateDegree = +this.RateForm.value.PresenterRateDegree;
        this.RateForm.value.SessionRateDegree = +this.RateForm.value.SessionRateDegree;
        this.RateForm.value.SessionId = sessionId;
        this.RateForm.value.UserId = localStorage.getItem('userId');
        const rateForm = this.RateForm.value;
        this.baseService.postItem(Controllers.Rate, Actions.AddRate, rateForm).subscribe(response => {
          this.baseService.GetItemWithUserId(Controllers.Session, Actions.GetAllSession,localStorage.getItem("userId")).subscribe(response => {
            this.sessions = response;
            this.RateForm.reset();
            this.notification.showNotification('Your rate added successfully', 'success');
            this.spinner.hide();
           }, error => {
             console.log(error);
             if(error.status === 400){
               this.notification.showNotification('Something went wrong', 'danger');
             }
             
             this.spinner.hide();
           });
          
          this.spinner.hide();
        }, error => {
          console.log(error);
          if(error.status === 400){
            this.notification.showNotification('Somthing went wrong', 'danger');
          }
          this.spinner.hide();
        });
      }
    }

}
