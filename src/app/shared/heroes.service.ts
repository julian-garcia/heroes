import { Hero } from "./hero.model";
import { EventEmitter } from "@angular/core";

export class HeroesService {
  heroSelected = new EventEmitter<Hero>();
  showDetail = new EventEmitter<boolean>();
  showDashboard = new EventEmitter<boolean>();
  showList = new EventEmitter<boolean>();
  showMenu = new EventEmitter<boolean>();
  updatedHeroes = new EventEmitter<Hero[]>();

  private heroes: Hero[] = [
    new Hero('Banana', 'assets/images/banana.png', 'Test desc', 0),
    new Hero('Batgirl', 'assets/images/batgirl.jpg', 'Test desc', 0),
    new Hero('Batman', 'assets/images/batman.jpg', 'Test desc', 0),
    new Hero('Captain America', 'assets/images/captain-america.jpg', 'Test desc', 0),
    new Hero('Mr. Fox', 'assets/images/fox.png', 'Test desc', 0),
    new Hero('Penguin', 'assets/images/penguin.png', 'Test desc', 2),
    new Hero('Pumpkinton', 'assets/images/pumpkin.png', 'Test desc', 0),
    new Hero('Sand Slash', 'assets/images/sandslash.png', 'Test desc', 1),
    new Hero('Bookle', 'assets/images/book.png', 'Test desc', 1),
    new Hero('Spider Girl', 'assets/images/spider-girl.jpg', 'Test desc', 0),
    new Hero('Spider Man', 'assets/images/spiderman.jpg', 'Test desc', 0),
    new Hero('Supergirl', 'assets/images/supergirl.jpg', 'Test desc', 0),
    new Hero('Superman', 'assets/images/superman.jpg', 'Test desc', 0),
    new Hero('Mad Wolf', 'assets/images/wolf.png', 'Test desc', 0),
    new Hero('Wonder Woman', 'assets/images/wonder-woman.jpg', 'Test desc', 0),
  ];

  private lastClickedHero:Hero;

  getHeroes() {
    return this.heroes.sort((hero1, hero2) => {
      if (hero2.votes == hero1.votes) 
        if (hero1.name > hero2.name) return 1; else return -1;
      else 
        return hero2.votes - hero1.votes;
    }).slice();
  }

  registerUpvotes(upvotedHeroes: Hero[]) {
    this.heroes = upvotedHeroes;
  }

  setLastHero(hero:Hero) {
    this.lastClickedHero = hero;
  }

  getLastHero() {
    return this.lastClickedHero;
  }
}