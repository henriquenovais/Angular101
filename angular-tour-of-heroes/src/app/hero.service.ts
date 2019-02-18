import { Injectable } from "@angular/core";
import { Hero } from "./models/hero";
import { HEROES } from "./models/mock-heroes";
import { Observable, of } from "rxjs";
import { MessagesService } from "./messages.service";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    this.messagesService.add("HeroService: fetched heroes.");
    return of(HEROES);
  }
  constructor(private messagesService: MessagesService) {}
}
