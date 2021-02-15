import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from 'src/app/model/hero';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  columnKey: string = '';
  heroesList$: BehaviorSubject<Hero[]> = this.heroService.list$;

  phrase: string = '';

  constructor(
    private heroService: HeroService,
  ) { }

  ngOnInit(): void {
  }

  onSelect(key: string): void {
    this.columnKey = key
  }
}
