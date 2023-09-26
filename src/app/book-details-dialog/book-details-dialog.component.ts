/**
 * Title: book-details-dialog.component.ts
 * Author: Jennifer Hoitenga
 * Date: September 6, 2023
 * Sources Used:
 * Assignment 5.4 Dialog Instructions by Professor Krasso
 */

// Import necessary modules and interfaces
import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.scss'],
})
export class BookDetailsDialogComponent implements OnInit {
  book: IBook; // Variable to store book details
  constructor(
    private dialogRef: MatDialogRef<BookDetailsDialogComponent>, // Reference to the dialog
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.book = data.book; // Initialize the 'book' variable with the injected book data
  }

  ngOnInit(): void {}
}
