import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  standalone: true,
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  imports: [CardModule]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
