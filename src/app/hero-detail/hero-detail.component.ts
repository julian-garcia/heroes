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
    const lastClickedHero = this.heroesService.getLastHero();
    
    if (lastClickedHero == undefined) { 
      this.singleHero = this.heroesService.getHeroes().slice()[0];
    } else {
      this.singleHero = lastClickedHero;
    }
    this.heroesService.heroSelected.subscribe(
      (hero: Hero) => {
        this.singleHero = hero;
      }
    );
  }

  onCloseDetail() {
    this.heroesService.showDetail.emit(false);
  }

  onUpvote() {
    let heroes = this.heroesService.getHeroes();
    let index = heroes.findIndex(hero => {return hero==this.singleHero});
    heroes[index].votes += 1;
    heroes.sort((hero1, hero2) => {
      if (hero2.votes == hero1.votes) 
        if (hero1.name > hero2.name) return 1; else return -1;
      else 
        return hero2.votes - hero1.votes;
      });
    this.heroesService.registerUpvotes(heroes);
    this.heroesService.updatedHeroes.emit(heroes);
  }
}
