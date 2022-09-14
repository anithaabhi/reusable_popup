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
    // debugger;
    this.dialogservice.dialogOne({
      title: "title1",
    message:"conform1",
   cancletext:"cancle1",
    conformtext:"conform1"
    })

  }

  openDialogtwo(){
// debugger;
    this.dialogservice.dialogOne({
      title: "title2",
      message:"conform2",
      cancletext:"cancle2",
      conformtext:"conform2"
    })
  }
}
