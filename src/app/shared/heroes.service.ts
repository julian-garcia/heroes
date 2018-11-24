import { Hero } from "./hero.model";
import { EventEmitter } from "@angular/core";

export class HeroesService {
  heroSelected = new EventEmitter<Hero>();
  private heroes: Hero[] = [
    new Hero('Supergirl', 'assets/images/supergirl.jpg', 'Test desc', 0),
    new Hero('Superman', 'assets/images/superman.jpg', 'Test desc', 0),
    new Hero('Banana', 'assets/images/banana.png', 'Test desc', 0),
    new Hero('Batgirl', 'assets/images/batgirl.jpg', 'Test desc', 0),
  ];

  getHeroes() {
    return this.heroes.slice();
  }
}