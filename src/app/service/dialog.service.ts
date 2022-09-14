import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogoneComponent } from '../component/dialogone/dialogone.component';
import { dialogoneData } from '../dialog-data';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog:MatDialog) { }

  dialogOne(data:dialogoneData): Observable<boolean>{
return this.dialog.open(DialogoneComponent, {
  data,
  width:'400px',
  disableClose:true
}).afterClosed();
  }
}
