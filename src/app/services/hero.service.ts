import { Injectable } from '@angular/core';
import { Hero } from '../domain/hero';
import { HEROES } from '../domain/mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }
}
