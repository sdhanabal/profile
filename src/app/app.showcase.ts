import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'showcase',
  templateUrl: './app.showcase.html',
  styleUrls: ['./app.component.css']
})
export class ShowcaseComponent implements OnInit{

  title = 'portfolio';
  mailText:string = "";
  isActive:boolean = false;
  panelOpenState = true;
  tab_bg = this.rgbToHex(241, 236, 236)

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }
  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
  openDialog() {
    this.dialog.open(HybridDetails);
  }
  componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  rgbToHex(r, g, b) {
    return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
  }

}

@Component({
  selector: 'project-hybrid',
  templateUrl: 'app.project-details-hybrid.html',
  styleUrls: ['./app.component.css']
})
export class HybridDetails {
  constructor( public dialogRef: MatDialogRef<HybridDetails>){}
  close() {
    this.dialogRef.close();
  }
}