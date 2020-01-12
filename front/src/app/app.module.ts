import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUIModule } from './material.module';
import { ClientFormComponent } from './components/client-form/client-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
