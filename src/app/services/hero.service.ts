import { Injectable } from '@angular/core';
import { Hero } from '../domain/hero';
import { HEROES } from '../domain/mock-heroes';
import {Observable, of} from "rxjs";
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  // Pre-Observable
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
