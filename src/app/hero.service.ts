import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';

@Injectable({ //ng generate service registers a provider with the root injector for your service by including provider metadata,
  providedIn: 'root', //provider = something that can create or deliver a service. In this case it instantiates the HeroService class to provide the service.
})
export class HeroService {

  private heroesUrl = 'api/heroes'; //URL to web api. Address to heroes resource on server(in-memory-data-service.ts)

  //Angular will inject the singletons "MessageService" & "HttpClient" into their properties when it creates the HeroService
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  //GET heroes from the server
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)  // http.get() returns Observable<Hero[]> aka 'an observerable of hero arrays'
  }

  //Log a HeroService message with the MessageService
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}