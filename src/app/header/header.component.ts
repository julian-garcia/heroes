import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../shared/heroes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private showMenu:boolean = false;

  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
    this.heroesService.showMenu.subscribe(
      (showMenu:boolean) => {
        this.showMenu = showMenu;
      }
    );
  }

  onShowMenu() {
    this.heroesService.showMenu.emit(this.showMenu=!this.showMenu);
  }

  onShowDashboard() {
    this.heroesService.showDashboard.emit(true);
    this.heroesService.showList.emit(false);
    this.heroesService.showMenu.emit(false);
  }

  onShowList() {
    this.heroesService.showDashboard.emit(false);
    this.heroesService.showList.emit(true);
    this.heroesService.showMenu.emit(false);
  }
}
