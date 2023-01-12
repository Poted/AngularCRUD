import { Component, Input } from '@angular/core';
import { SuperHero } from './models/super-hero';
import { SuperHeroService } from './services/super-hero.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularCRUD';
  heroes: SuperHero[] = [];
  heroToEdit?: SuperHero;
  mapLink: string[] = 
  [ 'https://goo.gl/maps/8VygmjnFaYUtWSeE7',
    'https://goo.gl/maps/WwHHbMMusJc3nuTP8', 
    "https://goo.gl/maps/peQR4satFCXxWmvr6" 
  ];
  heroSearch?: string = 'xD';
  
  constructor(private superHeroService: SuperHeroService) {}

  ngOnInit() : void {
    this.superHeroService
    .getHeroes()
    .subscribe((result: SuperHero[]) => (this.heroes = result));
  }

  updateHeroList(heroes: SuperHero[]){
    this.heroes = heroes;
  }

  initNewHero() {
    this.heroToEdit = new SuperHero();
  }

  editHero(hero: SuperHero){
    this.heroToEdit = hero;
  }

  searchForHero(hero: SuperHero){
    return this.heroSearch = `https://www.google.com/search?q=${hero.name}&ie=UTF-8&oe=UTF-8`;
  }

}
