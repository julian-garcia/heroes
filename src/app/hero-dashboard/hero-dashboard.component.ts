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
    this.heroes = this.heroesService.getHeroes().slice(0, 6);

    this.heroesService.showDetail.subscribe(
      (showDetail:boolean) => {
        this.showDetail = showDetail;
      }
    );
  }

  onSelectHero(hero: Hero) {
    this.heroesService.heroSelected.emit(hero);
    this.showDetail = true;
  }
}
