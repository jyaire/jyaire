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
      image: 'classeroyale.png',
    },
    {
      id: 2,
      name: 'BipBip Mobile !',
      description: "Récupération de téléphones mobiles sur la région Hauts de France",
      image: 'bipbip.png',
    },
    {
      id: 3,
      name: 'Ecole la Providence',
      description: "Site de l'école maternelle et primaire la Providence, à Dunkerque",
      link: 'http://www.ecolelaprovidence.fr/',
      image: 'providence.png',
    },

    {
      id: 4,
      name: "Il faut que j'vous raconte",
      description: "Blog personnel",
      link: 'http://mapoupoule.free.fr',
      image: 'mapoupoule.png',
    },
    {
      id: 5,
      name: "Elucubrations pédagogiques",
      description: "Réflexions sur l'enseignement, l'éducation et la pédagogie",
      link: 'http://jejoueenclasse.fr/elucubrations/',
      image: 'elucubrations.png',
    },
    {
      id: 6,
      name: "Les (bonnes) notes de JR",
      description: "Partage de ressources pour enseignants en Primaire",
      link: 'http://jejoueenclasse.fr/bonnesnotes/',
      image: 'bonnesnotes.png',
    },
    {
      id: 7,
      name: "Rencontres chantantes",
      description: "Ressources pour chanter à l'école",
      link: 'http://doumdoumdoum.free.fr',
      image: 'doumdoumdoum.png',
    },
    {
      id: 8,
      name: "Les anciens de Beaucamps",
      description: "Site des anciens élèves de l'institution Ste Marie de Beaucamps-Ligny (59)",
      link: 'http://asmbeaucamps.free.fr/',
      image: 'asmbeaucamps.png',
    },
  ]

  ngOnInit(): void {
  }

}
