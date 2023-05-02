import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, MessagesComponent, RouterLink],
  template: `
  <h1>{{title}}</h1>
<nav>
  <a routerLink="/dashboard">Dashboard</a>
  <a routerLink="/heroes">Heroes</a>
</nav>
<router-outlet></router-outlet>
<app-messages></app-messages>
  `,
  styles: [
    `
    h1 {
      margin-bottom: 0;
    }
    nav a {
      padding: 1rem;
      text-decoration: none;
      margin-top: 10px;
      display: inline-block;
      background-color: #e8e8e8;
      color: #3d3d3d;
      border-radius: 4px;
    }
    nav a:hover {
      color: white;
      background-color: #42545C;
    }
    nav a.active {
      background-color: black;
    }
    `,
  ],
})
export class AppComponent {
  title = 'Tour of Heroes';
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
