import { Component } from '@angular/core';
import { HeroesService } from './shared/heroes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroesService]
})
export class AppComponent {
  title = 'Heroes';
}
