import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroList: Hero[] = [
    {
      id: 1,
      name: 'Batman',
      superPower: 'Rich',
      address: 'Gotham'
    },
    {
      id: 2,
      name: 'Doctor Strange',
      superPower: 'Time Manipulation',
      address: 'New York'
    },
    {
      id: 3,
      name: 'Superman',
      superPower: 'Flying',
      address: 'Krypton'
    },
    {
      id: 4,
      name: 'Wolverine',
      superPower: 'Human Mutant',
      address: 'Louisiana'
    },
    {
      id: 5,
      name: 'Thor',
      superPower: 'Superhuman Strength',
      address: 'Asgard'
    }
  ]

  list$: BehaviorSubject<Hero[]> = new BehaviorSubject<Hero[]>(this.heroList);

  constructor() { }

  getAll(): void {
    this.list$.next(this.heroList);
  }
}
