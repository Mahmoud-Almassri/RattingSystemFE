import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actions, Controllers, httpFormDataOptions, httpOptions } from '../global-variables/api-config';
import { environment } from '../../environments/environment';
import { BaseModel } from '../models/models';
const apiPreLink = environment.apiPreLink;
@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http: HttpClient) {

  }
  public postItem(controllerName: string, actionName: string, postObject: any): Observable<any> {
    return this.http.post(apiPreLink + controllerName + actionName, JSON.stringify(postObject), httpOptions);
  }
  public postVideoItem(controllerName: string, actionName: string, postObject: any): Observable<any> {
    return this.http.post(apiPreLink + controllerName + actionName, postObject, httpOptions);
  }
  public GetItem(controllerName: string, actionName: string): Observable<any> {
    return this.http.get(apiPreLink + controllerName + actionName);
  }
  public GetItemWithUserId(controllerName: string, actionName: string, userId: string): Observable<any> {
    let params = new HttpParams().set("userId",userId); 
    return this.http.get(apiPreLink + controllerName + actionName,{ params: params });
  }

}
