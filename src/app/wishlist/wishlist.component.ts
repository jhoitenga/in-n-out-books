/**
 * Title: wishlist.component.ts
 * Author: Jennifer Hoitenga
 * Date: September 13, 2023
 * Sources Used:
 * Angular Tutorial for Beginners: Output Properties video by Professor Krasso (https://www.youtube.com/watch?v=SxAsehrObQo)
 */

import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})

// Initialize an empty array to store wishlist items
export class WishlistComponent implements OnInit {
  items: Array<IWishlistItem> = [];
  constructor() {}

  ngOnInit(): void {}

  // Event handler for adding items to the wishlist
  updateItemsHandler(item: IWishlistItem) {
    // Push the new item to the items array
    this.items.push(item);
  }
}
