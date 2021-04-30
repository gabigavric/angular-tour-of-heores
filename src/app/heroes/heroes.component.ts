import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  constructor(private heroService: HeroService) {} //The parameter simultaneously defines a private heroService property and identifies it as a HeroService injection site.
                           // When Angular creates a HeroesComponent, the Dependency Injection system sets the heroService parameter to the singleton instance of HeroService.
  ngOnInit() {
    this.getHeroes(); //Angular calls ngOnInit() at an appropriate time after constructing a HeroesComponent instance.
  }

  getHeroes(): void {                            
    this.heroService.getHeroes()                 //waits for the Observable to emit the array of heroes
    .subscribe(heroes => this.heroes = heroes);   //The subscribe() method passes the emitted array to the callback, which sets the component's heroes property.
  }

  selectedHero?: Hero; //selectedHero property unassigned(no selected hero when the app starts)
  onSelect(hero: Hero): void {   //onSelect() method assigns the clicked hero from the template to the component's selectedHero.
    this.selectedHero = hero;
  }
}