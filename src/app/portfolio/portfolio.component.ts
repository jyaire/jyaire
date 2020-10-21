import { Component, OnInit } from '@angular/core';
import {Website} from '../website';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  websites:Website[] = [
    {
      id: 1,
      name: 'Classe Royale',
      description: 'Evaluation ludique des élèves de Primaire',
      link: 'http://jejoueenclasse.fr/classeroyale/',
    },
    {
      id: 2,
      name: 'Ecole la Providence',
      description: "Site de l'école maternelle et primaire la Providence, à Dunkerque",
      link: 'http://jejoueenclasse.fr/classeroyale/',
    },
    {
      id: 3,
      name: "Il faut que j'vous raconte",
      description: "Blog personnel",
      link: 'http://mapoupoule.free.fr',
    },
  ]

  ngOnInit(): void {
  }

}
