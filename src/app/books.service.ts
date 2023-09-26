/**
 * Title: book.service.ts
 * Author: Jennifer Hoitenga
 * Date: September 6, 2023
 * Sources Used:
 * Angular Tutorial for Beginners: Data Tables with Angular Material video by Professor Krasso (https://www.youtube.com/watch?v=VvHoy5CtFIE)
 * Assignment 8.2 Instructions by Professor Krasso
 */

// Import necessary modules and interfaces
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IBook } from './book.interface';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

// Import the necessary HttpClient module
export class BooksService {
  // Array of ISBNs for the books to retrieve
  isbns: Array<string> = [
    '0345339681',
    '0261103571',
    '9780593099322',
    '9780261102361',
    '9780261102378',
    '9780590302715',
    '9780316769532',
    '9780743273565',
    '9780590405959',
  ];

  // Constructor to inject the HttpClient
  constructor(private http: HttpClient) {}

  // Method to retrieve a list of books as an Observable
  getBooks() {
    let params = new HttpParams();

    // Append the ISBNs to the 'bibkeys' parameter as a comma-separated list
    params = params.append('bibkeys', `ISBN:${this.isbns.join(',')}`);

    // Specify the desired response format as JSON
    params = params.append('format', 'json');

    // Specify the command as 'details' to get book details
    params = params.append('jscmd', 'details');

    // Make an HTTP GET request to the Open Library API with the constructed parameters
    return this.http.get('https://openlibrary.org/api/books', {
      params: params,
    });
  }
}
