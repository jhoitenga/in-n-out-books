/**
 * Title: book-list.component.ts
 * Author: Jennifer Hoitenga
 * Date: September 6, 2023
 * Sources Used:
 * Angular Tutorial for Beginners: Navigation and Layout with Angular Material video by Professor Krasso (https://www.youtube.com/watch?v=Wif3MsDN7Pg)
 * Angular Tutorial for Beginners: Data Tables with Angular Material video by Professor Krasso (https://www.youtube.com/watch?v=VvHoy5CtFIE)
 * Assignment 5.4 Dialog Instructions by Professor Krasso
 */

// Import necessary modules and interfaces
import { Component, OnInit } from '@angular/core';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';
import { BooksService } from '../books.service';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: Array<IBook> = []; // Array to store a list of books
  book: IBook; // Variable to store book details

  constructor(private booksService: BooksService, private dialog: MatDialog) {
    // When the component is constructed, fetch books using the BooksService
    this.booksService.getBooks().subscribe((res) => {
      console.log(res);

      // Iterate through the API response and extract book information
      for (let key in res) {
        if (res.hasOwnProperty(key)) {
          let authors = [];
          if (res[key].details.authors) {
            authors = res[key].details.authors.map(function (author) {
              return author.name;
            });
          }

          // Create an IBook object and add it to the 'books' array
          this.books.push({
            isbn: res[key].details.isbn_13
              ? res[key].details.isbn_13
              : res[key].details.isbn_10,
            title: res[key].details.title,
            description: res[key].details.subtitle
              ? res[key].details.subtitle
              : 'N/A',
            numOfPages: res[key].details.number_of_pages,
            authors: authors,
          });
        }
      }
    });
  }

  ngOnInit(): void {}

  showBookDetails(isbn: string) {
    // Find the book in the 'books' array based on its ISBN
    this.book = this.books.find((book) => book.isbn === isbn);

    // Open a dialog to display book details
    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      data: { book: this.book },
      disableClose: true,
      width: '800px',
    });

    console.log(this.book); // Log book details to the console

    // Subscribe to the dialog's afterClosed event to handle confirmation result
    dialogRef.afterClosed().subscribe((result) => {
      // If the result is 'confirm,' reset the book variable (close the dialog)
      if (result === 'confirm') {
        this.book = null;
      }
    });
  }
}
