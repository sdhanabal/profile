import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.business-card';
import { AchievementsComponent, HybridDetails } from './app.achievements-showcase';
import { AppMaterialModule } from "./app-material.module";
import { ChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    AppComponent,
    AchievementsComponent,
    HybridDetails
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppMaterialModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent, AchievementsComponent],
  entryComponents: [
    HybridDetails
  ]
})
export class AppModule { }
