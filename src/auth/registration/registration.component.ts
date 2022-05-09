import { Router } from '@angular/router';
import { AuthorizeService } from './../authorize.service';
import { NotificationService } from './../../shared/services/notification.service';
import { Actions, Controllers } from './../../shared/global-variables/api-config';
import { BaseService } from './../../shared/services/base.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
    let pass = group.get('password').value;
    let confirmPass = group.get('confirmPassword').value
    return pass === confirmPass ? null : { notSame: true }
  }
  
  registrationForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  });

  constructor(
    public spinner: NgxSpinnerService,
    private authService: AuthorizeService,
    private router: Router,
    private baseService: BaseService,
    public notification: NotificationService
  ) {
    this.registrationForm.setValidators(this.checkPasswords)
   }

  ngOnInit(): void {
  }

  submitForm(): void {
    if (this.registrationForm.invalid){
      this.notification.showNotification('Please fill all required fields', 'warning');
    }
    else {
      this.spinner.show();
      const loginForm = this.registrationForm.value;
      this.baseService.postItem(Controllers.Auth, Actions.Registration, loginForm).subscribe(response => {
        this.spinner.hide();
        this.router.navigate(['/auth/login']);
        this.notification.showNotification('User added successfully', 'success');
      }, error => {
        console.log(error);
        if(error.status === 400){
          this.notification.showNotification(error.error, 'warning');
        }
        else {
          this.notification.showNotification('Something went wrong please contact system admin', 'danger');
        }
        this.spinner.hide();
      });
    }
  }

}
