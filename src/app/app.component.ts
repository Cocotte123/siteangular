import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {ProductComponent} from './product/product.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AboutComponent, FooterComponent, HeaderComponent, HomeComponent, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Au petit village';
}
