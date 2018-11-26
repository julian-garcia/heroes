import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../shared/hero.model';
import { HeroesService } from '../shared/heroes.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() singleHero: Hero;

  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
    this.heroesService.heroSelected.subscribe(
      (hero: Hero) => {
        console.log(hero);
        this.singleHero = hero;
      }
    );
  }

  onCloseDetail() {

  }
}
