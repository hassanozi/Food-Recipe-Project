import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { GlobalInterceptor } from './Interceptors/global.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      closeButton:true,
      progressBar:true
    }
    ),
    NgxSpinnerModule,
  ],
  providers: [
    {
    provide : HTTP_INTERCEPTORS,
    useClass : GlobalInterceptor,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
