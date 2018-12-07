import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../shared/heroes.service';
import { Hero } from '../shared/hero.model';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  private heroes:Hero[];

  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
  }

  onSelectHero(hero: Hero) {
    this.heroesService.showDetail.emit(true);
    this.heroesService.heroSelected.emit(hero);
    this.heroesService.setLastHero(hero);
  }
}
