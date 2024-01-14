import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';

@Component({
  standalone: true,
  selector: 'app-menu',
  imports: [MenubarModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems = [
    {
      label: 'About'
    },
    {
      label: 'Experience'
    },
    {
      label: 'Extra Curricular'
    },
    {
      label: 'Projects'
    },
    {
      label: 'Skills'
    },
    {
      label: 'Education'
    },
    {
      label: 'Contact'
    }
];

  constructor() { }

  ngOnInit() {
  }

}
