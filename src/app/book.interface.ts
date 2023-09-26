/*
 * Title: book.interface.ts
 * Author: Jennifer Hoitenga
 * Date: September 6, 2023
 * Sources Used:
 * Angular Tutorial for Beginners: Navigation and Layout with Angular Material video by Professor Krasso (https://www.youtube.com/watch?v=Wif3MsDN7Pg)
 */

// Define an interface for book objects
export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
