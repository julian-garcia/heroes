import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../shared/heroes.service';
import { Hero } from '../shared/hero.model';

@Component({
  selector: 'app-hero-dashboard',
  templateUrl: './hero-dashboard.component.html',
  styleUrls: ['./hero-dashboard.component.css']
})
export class HeroDashboardComponent implements OnInit {
  heroes:Hero[];

  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes().slice(0, 6);
    // Re-order heroes by descending upvotes dynamically as and 
    // when characters are upvoted
    this.heroesService.updatedHeroes.subscribe(
      (heroes: Hero[]) => {
        this.heroes = heroes.slice(0, 6);
      }
    );
  }

  onSelectHero(hero: Hero) {
    this.heroesService.showDetail.emit(true);
    this.heroesService.heroSelected.emit(hero);
    this.heroesService.setLastHero(hero);
  }
}
