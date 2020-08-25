import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'business-card',
  templateUrl: './app.business-card.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'portfolio';
  mailText:string = "";
  isActive:boolean = false;
  public innerWidth: any;
  public gen_width = 550;
  ngOnInit() {
      this.innerWidth = window.innerWidth;
      if (this.innerWidth < this.gen_width){
        this.gen_width = this.innerWidth;
      }      
  }
  send_mail(){
    this.toggle();
    var mail = 'mailto:kumar.dsaravana@gmail.com?subject=Interested to connect with you&body=Hi Saravana';
    window.open(mail, "_blank");
  }
  connect_now(){
    this.toggle();
    window.open("https://www.linkedin.com/in/saravanakumardhanabal/", "_blank");
  }
  toggle(){
    let flag = this.isActive;
    this.isActive = !flag;
  }
}
