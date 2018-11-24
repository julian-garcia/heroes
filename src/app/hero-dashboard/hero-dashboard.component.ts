import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../shared/heroes.service';
import { Hero } from '../shared/hero.model';

@Component({
  selector: 'app-hero-dashboard',
  templateUrl: './hero-dashboard.component.html',
  styleUrls: ['./hero-dashboard.component.css']
})
export class HeroDashboardComponent implements OnInit {
  private heroes:Hero[];

  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
  }
  
  onSelectHero(hero: Hero) {
    this.heroesService.heroSelected.emit(hero);
  }
}
