import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'product',component:ProductComponent},
    {path:'contact',component:ContactComponent},
    {path:'**',component:ErrorComponent}
];
