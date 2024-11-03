import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
declarations:[ AppComponent , LoginComponent ],
 imports:[BrowserModule, FormsModule , ReactiveFormsModule],
 bootstrap: [AppComponent]
})
export class AppModule{}
