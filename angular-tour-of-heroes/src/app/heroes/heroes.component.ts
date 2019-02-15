import { Component, OnInit } from "@angular/core";
import { Hero } from "../models/Hero";
import { HEROES } from "../models/mock-heroes";

@Component({
  selector: "app-heroes", //CSS element of the component
  templateUrl: "./heroes.component.html", //Location of component's template
  styleUrls: ["./heroes.component.css"] //Location of component's private CSS styles.
})
//It is always fundamental to export the component, as follows:
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor() {}

  ngOnInit() {
    //Good place to put initialization logic
    //Angular calls this function shortly after creating a component
  }
}
