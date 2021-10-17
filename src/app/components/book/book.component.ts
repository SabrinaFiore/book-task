import { Book } from './../../model/book';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book-service.service';

const apiUrl = 'http://localhost:3000/books';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
})

export class BookComponent implements OnInit {

  books: Book[];
  error: any;
  active: Book;

  constructor(private http: HttpClient,
    private bookService: BookService) { }

  getAll() {
    this.bookService.getAll()
      .subscribe((res: Book[]) => {
        this.books = res;
      },
      err => this.error = err
    );
  }

  delete(event, book: Book) {
    event.stopPropagation();
    this.http.delete<Book>(`${apiUrl}/${book.id}`)
      .subscribe(() => {
        const index = this.books.indexOf(book);
        this.books.splice(index,1);
      },
      err => this.error = err
    );
  }

  setActive(book: Book) {
    this.active = book;
  }

  ngOnInit(): void {
    this.getAll();
  }
}
