/**
 * Title: app.component.ts
 * Author: Jennifer Hoitenga
 * Date: September 6, 2023
 * Sources Used:
 * Angular Tutorial for Beginners: Navigation and Layout with Angular Material video by Professor Krasso (https://www.youtube.com/watch?v=Wif3MsDN7Pg)
 * Assignment 5.4 Dialog Instructions by Professor Krasso
 * Assignment 8.2 Instructions by Professor Krasso
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  assignment: string; // Declare a property for assignment information

  // Constructor method to initialize the assignment property
  constructor() {
    this.assignment = 'Welcome to In-N-Out-Books';
  }
}
