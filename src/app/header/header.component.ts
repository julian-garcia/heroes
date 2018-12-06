import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../shared/heroes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showMenu = false;
  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
  }

  onShowDashboard() {
    this.heroesService.showDashboard.emit(true);
    this.heroesService.showList.emit(false);
  }

  onShowList() {
    this.heroesService.showDashboard.emit(false);
    this.heroesService.showList.emit(true);
  }
}
