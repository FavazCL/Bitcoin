import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainCoverComponent } from './home/main-cover/main-cover.component';
import { MainCoverLeftComponent } from './home/main-cover/main-cover-left/main-cover-left.component';
import { MainCoverRightComponent } from './home/main-cover/main-cover-right/main-cover-right.component';
import { FooterComponent } from './footer/footer.component';
import { RecordComponent } from './record/record.component';
import { MainRecordComponent } from './record/main-record/main-record.component';
import { MainRecordLeftComponent } from './record/main-record/main-record-left/main-record-left.component';
import { MainRecordRightComponent } from './record/main-record/main-record-right/main-record-right.component';
import { ServicesModule } from '../services/service.module';
import { DataService } from '../services/data.service';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    MainCoverComponent,
    MainCoverLeftComponent,
    MainCoverRightComponent,
    FooterComponent,
    RecordComponent,
    MainRecordComponent,
    MainRecordLeftComponent,
    MainRecordRightComponent,
  ],
  imports: [
    BrowserModule,
    ServicesModule,
    RouterModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [DataService],
  exports: [
    HomeComponent,
    NavbarComponent,
    MainCoverComponent,
    MainCoverLeftComponent,
    MainCoverRightComponent,
    FooterComponent,
    RecordComponent,
    MainRecordComponent,
    MainRecordLeftComponent,
    MainRecordRightComponent
  ]
})
export class FeaturesModule { }
