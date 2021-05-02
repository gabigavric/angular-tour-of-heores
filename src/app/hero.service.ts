import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
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

  //GET hero from the server
  getHero(id: number): Observable<Hero> { // http.get() returns Observable<Hero> aka 'an observerable of Hero objects'
    const url = `${this.heroesUrl}/${id}`; //constructs url w/desired hero's id.
    return this.http.get<Hero>(url).pipe( //'pipes' Observable result from http.get() through RxJS catchError() operator
      tap(_ => this.log(`fetched hero id=${id}`)), // tap looks at observable value & sends message via log() message area at bottom of screen
      catchError(this.handleError<Hero>(`getHero id=${id}`)) // catchError operator intercepts failed Observable, then passes error to error handling function
    );
  }

  /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  //Log a HeroService message with the MessageService
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}