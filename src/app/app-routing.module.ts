/**
 * Title: app_routing-module.ts
 * Author: Jennifer Hoitenga
 * Date: September 6, 2023
 * Sources Used:
 * Angular Tutorial for Beginners: Navigation and Layout with Angular Material video by Professor Krasso (https://www.youtube.com/watch?v=Wif3MsDN7Pg)
 * Angular Tutorial for Beginners: Output Properties video by Professor Krasso (https://www.youtube.com/watch?v=SxAsehrObQo)
 */

// Import necessary modules from Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import components for routing
import { BookListComponent } from './book-list/book-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { WishlistComponent } from './wishlist/wishlist.component';

// Define the application routes and their associated components
const routes: Routes = [
  {
    path: '', // Default route, maps to BookListComponent
    component: BookListComponent,
  },
  {
    path: 'book-list', // Route for the book list page
    component: BookListComponent,
  },
  {
    path: 'contact', // Route for the contact page
    component: ContactComponent,
  },
  {
    path: 'about', // Route for the about page
    component: AboutComponent,
  },
  {
    path: 'wishlist', // Route for the wishlist page
    component: WishlistComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
