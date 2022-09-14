import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { dialogoneData } from 'src/app/dialog-data';

@Component({
  selector: 'app-dialogone',
  templateUrl: './dialogone.component.html',
  styleUrls: ['./dialogone.component.css']
})
export class DialogoneComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:dialogoneData) { }

  ngOnInit(): void {
  }

}
