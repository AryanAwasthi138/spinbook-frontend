import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet, } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { BrowserModule } from "@angular/platform-browser";
import { routes } from "./app.routes";
import { RegisterComponent } from "./register/register.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { ViewTableComponent } from "./view-table/view-table.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { BookslotComponent } from "./bookslot/bookslot.component";
import { ViewSlotsComponent } from "./view-slots/view-slots.component";
import { AdminComponent } from "./admin/admin.component";
import { LoginComponent } from "./login/login.component";
import { UpdateComponent } from "./admin/update/update.component";
import { ShowSlotsComponent } from "./admin/show-slots/show-slots.component";
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { NgToastModule} from 'ng-angular-popup';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';;


@NgModule({
    declarations: [AppComponent, HomeComponent, RegisterComponent, AboutUsComponent, ContactUsComponent, ViewTableComponent, BookslotComponent, ViewSlotsComponent, AdminComponent, LoginComponent, UpdateComponent, ShowSlotsComponent],
    bootstrap: [AppComponent],
    imports: [RouterOutlet, BrowserModule,BrowserAnimationsModule, RouterLink, RouterModule.forRoot(routes), RouterLinkActive, FormsModule, CommonModule, HttpClientModule, TableModule, ButtonModule,CardModule,NgToastModule,DialogModule,CalendarModule],
    exports: [RouterModule],
    providers: [],

})

export class AppModule {

}