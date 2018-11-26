import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../shared/heroes.service';
import { Hero } from '../shared/hero.model';

@Component({
  selector: 'app-hero-dashboard',
  templateUrl: './hero-dashboard.component.html',
  styleUrls: ['./hero-dashboard.component.css']
})
export class HeroDashboardComponent implements OnInit {
  showDetail = false;
  private heroes:Hero[];

  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes()
      .sort((hero1, hero2) => {
        if (hero2.votes == hero1.votes) 
          if (hero1.name > hero2.name) return 1; else return -1;
        else 
          return hero2.votes - hero1.votes;
      }).slice(0, 6);
  }
  
  onSelectHero(hero: Hero) {
    this.heroesService.heroSelected.emit(hero);
    this.showDetail = true;
  }
}
