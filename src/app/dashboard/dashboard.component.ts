import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroSearchComponent } from '../hero-search/hero-search.component';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink, HeroSearchComponent],
  template: `
  <h2>Top Heroes</h2>
  <div class="heroes-menu">
    <a *ngFor="let hero of heroes()"
        routerLink="/detail/{{hero.id}}">
        {{hero.name}}
    </a>
  </div>
  <app-hero-search></app-hero-search>
  `,
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  heroes = inject(HeroService).getHeroes;
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
