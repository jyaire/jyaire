import { Component, OnInit } from '@angular/core';
import { Jr } from '../jr';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  moi:Jr = {
    name : "Masson",
    firstname: 'Jean-Roch',
    birthdate: '08/03/1977',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
