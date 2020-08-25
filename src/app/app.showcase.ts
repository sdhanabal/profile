import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatDialogRef } from "@angular/material/dialog";

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
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
  public innerWidth: any;
  public gen_width = 550;
  constructor(public dialog: MatDialog) {}
  telecom: Tile[] = [
    {text: 'SDWAN', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'SS7', cols: 1, rows: 1, color: '#DDBDF1'},
    {text: 'LTE', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Telecom', cols: 3, rows: 1, color: 'lightblue'}
  ];
  automation: Tile[] = [
    {text: 'Python', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Shell', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Ansible', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Robot Framework', cols: 1, rows: 1, color: '#DDBDF1'},
    {text: 'Automation Development', cols: 4, rows: 1, color: 'lightblue'}
  ];
  web: Tile[] = [
    {text: 'Angular', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'JQuery', cols: 1, rows: 1, color: '#DDBDF1'},
    {text: 'HTML CSS Bootstrap', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Python', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'NodeJS', cols: 1, rows: 1, color: '#DDBDF1'},
    {text: 'MongoDB', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'SPA / AJAX', cols: 3, rows: 1, color: 'lightgrey'},
    {text: 'REST', cols: 3, rows: 1, color: 'lightgreen'},
    {text: 'Full Stack Web App Development', cols: 6, rows: 1, color: 'lightblue'}    
  ];
  ngOnInit() {
      this.innerWidth = window.innerWidth;
      if (this.innerWidth < this.gen_width){
        this.gen_width = this.innerWidth;
      }
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