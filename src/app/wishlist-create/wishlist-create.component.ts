/**
 * Title: wishlist-create.component.ts
 * Author: Jennifer Hoitenga
 * Date: September 13, 2023
 * Sources Used:
 * Angular Tutorial for Beginners: Output Properties video by Professor Krasso (https://www.youtube.com/watch?v=SxAsehrObQo)
 */

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.scss'],
})

// Declare an EventEmitter to send wishlist item data to the parent component.
export class WishlistCreateComponent implements OnInit {
  @Output() addItemEmitter = new EventEmitter<IWishlistItem>();

  // Initialize an empty item object
  item: IWishlistItem;

  constructor() {
    // Initialize the item object as an empty WishlistItem.
    this.item = {} as IWishlistItem;
  }

  ngOnInit(): void {}

  // Function to add a new wishlist item.
  addItem() {
    this.addItemEmitter.emit({
      title: this.item.title,
      authors: this.item.authors,
    });

    // Reset the item object after adding to the wishlist.
    this.item = {} as IWishlistItem;
  }
}
