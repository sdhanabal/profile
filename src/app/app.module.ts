import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.business-card';
import { ShowcaseComponent, HybridDetails } from './app.showcase';
import { AppMaterialModule } from "./app-material.module";
import { ChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    AppComponent,
    HybridDetails,
    ShowcaseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppMaterialModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent, ShowcaseComponent],
  entryComponents: [
    HybridDetails
  ]
})
export class AppModule { }
