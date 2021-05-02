import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({           //ng generate service registers a provider with the root injector for your service by including provider metadata,
  providedIn: 'root', //provider = something that can create or deliver a service. In this case it instantiates the HeroService class to provide the service.
})
export class HeroService {
  //declares a private messageService property. Angular will inject the singleton MessageService into that property when it creates the HeroService.
  constructor(private messageService: MessageService) { } 

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id) as Hero;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}