/**
 * Title: book-details-dialog.component.scss
 * Author: Jennifer Hoitenga
 * Date: September 6, 2023
 * Sources Used:
 * Assignment 5.4 Dialog Instructions by Professor Krasso
 */

// Import necessary modules and interfaces
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BookDetailsDialogComponent } from './book-details-dialog.component';

describe('BookDetailsDialogComponent', () => {
  let component: BookDetailsDialogComponent;
  let fixture: ComponentFixture<BookDetailsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookDetailsDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
