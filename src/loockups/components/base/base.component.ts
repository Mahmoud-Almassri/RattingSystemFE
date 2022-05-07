import { Component, OnInit } from '@angular/core';
import { Status } from '../../models/enums.model';
import { BaseService } from '../../../shared/services/base.service';
import { NotificationService } from '../../../shared/services/notification.service';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-base',
  template: ``,
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  public loockupsStatuses = [];
  constructor(public baseService: BaseService,
    public spinner: NgxSpinnerService,
    public notification: NotificationService,
    public dialog:MatDialog,) { }

  ngOnInit(): void {
    this.loockupsStatuses = Status
  }

  getStatusName(statusId){
    const status = this.loockupsStatuses.find(x=>x.id == statusId)
    return status ? status.name : status 
  }

}
