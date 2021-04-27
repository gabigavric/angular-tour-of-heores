import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;

  constructor() { }

  ngOnInit() {
  }

  selectedHero?: Hero; //selectedHero property unassigned(no selected hero when the app starts)
  onSelect(hero: Hero): void {   //onSelect() method assigns the clicked hero from the template to the component's selectedHero.
    this.selectedHero = hero;
  }
}