import { Component, OnInit } from '@angular/core';
// import { HEROES } from '../domain/mock-heroes'
import {Hero} from "../domain/hero";
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  // selectedHero: Hero;


  constructor(private heroService: HeroService) {

  }

  ngOnInit() {
    this.getHeroes();
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

  getHeroes(): void {
    // Pre-Observable
    // this.heroes = this.heroService.getHeroes();

    // Service returns Observable<Hero[]>
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
}
