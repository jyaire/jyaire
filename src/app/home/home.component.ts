import { Component, OnInit } from '@angular/core';
import { Jr } from '../jr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  moi:Jr = {
    name : "Masson",
    firstname: 'Jean-Roch',
    birthdate: '08/03/1977',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
