import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { NavbarComponent } from "./navbar/navbar.component";



@NgModule({
declarations:[ AppComponent ,NavbarComponent],
 imports:[BrowserModule, FormsModule],
 bootstrap: [AppComponent]
})
export class AppModule{}
