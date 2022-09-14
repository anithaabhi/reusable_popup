import { Component } from '@angular/core';
import { DialogService } from './service/dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dialogservice:DialogService){}

  openDialogOne(){
    debugger;
    this.dialogservice.dialogOne({
      title: "title1",
    firstname:"first1",
    lastname:"last1",
    email:"email1",
    phone:"phone1",
    cancletext:"cancle1",
    conformtext:"conform1"
    })

  }

  openDialogtwo(){
debugger;
    this.dialogservice.dialogOne({
      title: "title2",
      firstname:"first2",
      lastname:"last2",
      email:"email2",
      phone:"phone2",
      cancletext:"cancle2",
      conformtext:"conform2"
    })
  }
}
