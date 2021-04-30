import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor() { }

  /*this was for commit fa50c067e4c3fb286e848387f4abac82186ddc73 when getHeroes() was synchronous
  getHeroes(): Hero[] {
    return HEROES;
  }
  */

  //simulate getting data from the server with the RxJS of() function
  getHeroes(): Observable<Hero[]> {  
    const heroes = of(HEROES); // of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.
    return heroes;
  }
}