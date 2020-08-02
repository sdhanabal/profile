import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'achievements-showcase',
  templateUrl: './app.achievements-showcase.html',
  styleUrls: ['./app.component.css']
})
export class AchievementsComponent implements OnInit {
  title = 'portfolio';
  mailText:string = "";
  isActive:boolean = false;
  panelOpenState = true;

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