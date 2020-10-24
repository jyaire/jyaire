import { Component, OnInit } from '@angular/core';
import { Jr } from '../jr';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  moi:Jr = {
    name : "Masson",
    firstname: 'Jean-Roch',
    birthdate: '08/03/1977',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
