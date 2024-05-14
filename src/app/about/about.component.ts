import { Component, inject } from '@angular/core';
import { DataService } from '../services/data.service';
import { Data } from '../services/data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  providers: [DataService],
})
export class AboutComponent {

  dataService: DataService = inject(DataService);
  data !: Data | undefined;
  
  constructor(){
    this.data = this.dataService.getDataById("2");
  };
}
