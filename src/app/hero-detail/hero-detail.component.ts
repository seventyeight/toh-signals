import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location, NgIf, UpperCasePipe } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [NgIf, UpperCasePipe, FormsModule],
  template: `
  <div *ngIf="hero()">
  <h2>{{hero().name | uppercase}} Details</h2>
  <div><span>id: </span>{{hero().id}}</div>
  <div>
    <label for="hero-name">Hero name: </label>
    <input id="hero-name" [(ngModel)]="hero().name" placeholder="Hero name"/>
  </div>
  <button type="button" (click)="goBack()">go back</button>
  <button type="button" (click)="save()">save</button>
</div>
  `,
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  hero = signal<Hero>({ id: 0, name: '' });

  private route = inject(ActivatedRoute);
  private heroService = inject(HeroService);
  private location = inject(Location);

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.heroService.getHero(id).subscribe((hero) => this.hero.set(hero));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero()).subscribe(() => this.goBack());
    }
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
