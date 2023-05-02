import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [NgIf, NgFor],
  template: `
  <div *ngIf="messageService.messages.length">

  <h2>Messages</h2>
  <button type="button"
          class="clear"
          (click)="messageService.clear()">Clear messages</button>
  <div *ngFor='let message of messageService.messages'> {{message}} </div>

</div>
  `,
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {}
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
