import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

// Routes tell the Router which view to display when a user clicks a link or pastes a URL into the browser address bar.
const routes: Routes = [{ path: 'heroes', component: HeroesComponent }];
@NgModule({ //metadata initializes the router and starts it listening for browser location changes.
  imports: [RouterModule.forRoot(routes)], //The method is called forRoot() because you configure the router at the application's root level. 
                                          //The forRoot() method supplies the service providers and directives needed for routing, and performs 
                                          //the initial navigation based on the current browser URL.
  exports: [RouterModule] //AppRoutingModule exports RouterModule so it will be available throughout the app.
})
export class AppRoutingModule { }
