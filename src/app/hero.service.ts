import { Injectable } from '@angular/core';
import {Hero} from './heroes/hero';
import {HEROES} from './mock-heroes';

import {MessageService} from './message.service';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor(private messageService: MessageService){}

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetch heroes');
    return of(HEROES);
  }
  getHero(id : number): Observable<Hero>{

    this.messageService.add(' Hero service: fetched hero id=${id}');
    return of(HEROES.find(hero => hero.id === id));
  }

}
