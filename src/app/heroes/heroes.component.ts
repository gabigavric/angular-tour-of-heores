import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero?: Hero;

  heroes: Hero[] = [];

  //below - simultaneously defines a private heroService property and identifies it as a HeroService injection site
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(passedInHero: Hero): void {
    this.selectedHero = passedInHero;
    this.messageService.add(`HeroesComponent: Selected hero id=${passedInHero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes() //Waits for the Observable to emit the array of heroes
        .subscribe(emmitedHeroes => this.heroes = emmitedHeroes); //The subscribe() method passes the emitted array to the callback, which sets the component's heroes property.
  }
}