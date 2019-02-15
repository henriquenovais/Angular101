import { Component, OnInit } from "@angular/core";
import { Hero } from "../models/Hero";
import { HEROES } from "../models/mock-heroes";
import { HeroService } from "../hero.service";

@Component({
  selector: "app-heroes", //CSS element of the component
  templateUrl: "./heroes.component.html", //Location of component's template
  styleUrls: ["./heroes.component.css"] //Location of component's private CSS styles.
})
//It is always fundamental to export the component, as follows:
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  /*
  //This is an example of a synchronous(foreground) requisition to database. Which is 
  //not a good idea since the server will have to handle the requests one by one
  //while the application waits.
  //This kind of requisition works here because the amount of data is saved in a local
  //environment and the amount of data is very small

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
  //In order to turn this synchronous request into an asynchronous request it is necessary 
  //to make a Promise, a callback or an Observable. In this example we will use an observable.
  */
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }
  constructor(private heroService: HeroService) {}

  ngOnInit() {
    //Good place to put initialization logic
    //Angular calls this function shortly after creating a component
    this.getHeroes(); //Application calls the Hero database as soon as it starts successfully
  }
}
