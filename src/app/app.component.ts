import { Component, OnInit } from '@angular/core';
import { HeroesService } from './shared/heroes.service';
import { Hero } from './shared/hero.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroesService]
})
export class AppComponent implements OnInit {
  title = 'Heroes';
  showDetail:boolean = true;
  showDashboard:boolean = true;
  showList:boolean = false;
  showMenu:boolean = true;
  heroes:Hero[];
  
  constructor(private heroesService: HeroesService) {}

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes().slice();

    this.heroesService.showDetail.subscribe(
      (showDetail:boolean) => {
        this.showDetail = showDetail;
      }
    );

    this.heroesService.showDashboard.subscribe(
      (showDashboard:boolean) => {
        this.showDashboard = showDashboard;
      }
    );

    this.heroesService.showList.subscribe(
      (showList:boolean) => {
        this.showList = showList;
      }
    );

    if (window.innerWidth <= 400) {
      this.heroesService.showDetail.emit(false);
    } else {
      this.heroesService.showDetail.emit(true);
    }
  }
}
