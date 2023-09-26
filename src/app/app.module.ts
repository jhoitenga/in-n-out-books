/**
 * Title: app.module.ts
 * Author: Jennifer Hoitenga
 * Date: September 6, 2023
 * Sources Used:
 * Angular Tutorial for Beginners: Navigation and Layout with Angular Material video by Professor Krasso (https://www.youtube.com/watch?v=Wif3MsDN7Pg)
 * Angular Tutorial for Beginners: Data Tables with Angular Material video by Professor Krasso (https://www.youtube.com/watch?v=VvHoy5CtFIE)
 * Angular Tutorial for Beginners: Output Properties video by Professor Krasso (https://www.youtube.com/watch?v=SxAsehrObQo)
 * Assignment 5.4 Dialog Instructions by Professor Krasso
 * Assignment 8.2 Instructions by Professor Krasso
 */

// Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import custom components for the application
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BookListComponent } from './book-list/book-list.component';

// Import Angular Material modules for UI components
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { BookDetailsDialogComponent } from './book-details-dialog/book-details-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { WishlistComponent } from './wishlist/wishlist.component';
import { WishlistCreateComponent } from './wishlist-create/wishlist-create.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    // Declare the application components
    AppComponent,
    AboutComponent,
    ContactComponent,
    BookListComponent,
    BookDetailsDialogComponent,
    WishlistComponent,
    WishlistCreateComponent,
  ],
  imports: [
    // Import necessary Angular modules
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Import Angular Material modules for UI components
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    FlexLayoutModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
