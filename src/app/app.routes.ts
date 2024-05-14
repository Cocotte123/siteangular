import { Routes } from '@angular/router';
import {HomeComponent} from '../app/home/home.component';
import {ProductComponent} from '../app/product/product.component';
import {AboutComponent} from '../app/about/about.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home/:id', component: ProductComponent},
    {path: 'about', component: AboutComponent},
];
