import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'business-card',
  templateUrl: './app.business-card.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  mailText:string = "";
  isActive:boolean = false;
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
