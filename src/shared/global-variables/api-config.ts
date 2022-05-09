import { HttpHeaders } from '@angular/common/http';

export const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
    })
};


export const httpFormDataOptions = {
    headers: new HttpHeaders({
        // 'Content-Type': undefined
    })
};

export enum Controllers {
  Auth = 'Auth/',
  Session = 'Session/',
  Rate = 'Rate/',
}


export enum Actions {
  Login = 'Login',
  Registration = 'Registration',
  GetAllSession = 'GetAllSession',
  AddRate = 'AddRate',
  AddSession = 'AddSession',
  UploadSessionVideo = 'UploadSessionVideo',
  ShowSessionsRates = 'ShowSessionsRates',
  ShowAverageSessionRates = 'ShowAverageSessionRates',
}
