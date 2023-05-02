import { NgFor } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [RouterLink, NgFor],
  template: `
  <h2>My Heroes</h2>

<div>
  <label for="new-hero">Hero name: </label>
  <input id="new-hero" #heroName />

  <!-- (click) passes input value to add() and then clears the input -->
  <button type="button" class="add-button" (click)="add(heroName.value); heroName.value=''">
    Add hero
  </button>
</div>

<ul class="heroes">
  <li *ngFor="let hero of heroes()">
    <a routerLink="/detail/{{hero.id}}">
      <span class="badge">{{hero.id}}</span> {{hero.name}}
    </a>
    <button type="button" class="delete" title="delete hero"
      (click)="delete(hero)">x</button>
  </li>
</ul>
  `,
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  heroService = inject(HeroService);
  heroes = computed(() => this.heroService.getHeroes());

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }

    // this.heroService.addHero({ name } as Hero).subscribe((hero) => {
    // this.heroes.update()  //mutate((heroes) => heroes.push(hero));
    // });
  }

  delete(hero: Hero): void {}
  //   this.heroes.mutate((heroes) => heroes.filter((h) => h !== hero));
  //   this.heroService.deleteHero(hero.id).subscribe();
  // }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
