import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ViewTableComponent } from './view-table/view-table.component';
import { ViewSlotsComponent } from './view-slots/view-slots.component';
import { BookslotComponent } from './bookslot/bookslot.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './Guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { adminGuard } from './Guard/admin.guard';
import { UpdateComponent } from './admin/update/update.component';
import { ShowSlotsComponent } from './admin/show-slots/show-slots.component';

export const routes: Routes = [
    {path:'',pathMatch:'full',redirectTo:'home'},
    {path:'home', component:HomeComponent},
    {path:'createAcc',component:RegisterComponent},
    {path:'logout',component:HomeComponent,canActivate: [AuthGuard]},
    {path:'login',component:LoginComponent},
    {path:'about',component:AboutUsComponent},
    {path:'contact',component:ContactUsComponent},
    {path:'viewtable',component:ViewTableComponent,canActivate: [AuthGuard]},
    {path:'viewslots',component:ViewSlotsComponent,canActivate: [AuthGuard]},
    {path:'bookslot', component:BookslotComponent,canActivate: [AuthGuard]},
    {path:'admin',component:AdminComponent, canActivate: [adminGuard]},
    {path:'viewslots-admin',component:ShowSlotsComponent,canActivate: [adminGuard]},
    {path:'update',component:UpdateComponent, canActivate: [adminGuard]},
    {path:'**',pathMatch:'full',redirectTo:''}

];
