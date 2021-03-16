import { Book } from './../../model/book';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

const apiUrl = 'http://localhost:3000/books';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
})

export class BookComponent implements OnInit {

  books: Book[];
  error: any;

  constructor(private http: HttpClient) { }

  getAll() {
    this.http.get<Book[]>(apiUrl)
      .subscribe((res: Book[]) => {
        this.books = res;
      },
      err => this.error = err
    );
  }

  add(form: NgForm) {
    this.http.post<Book>(`${apiUrl}`, form.value)
      .subscribe((res: Book) => {
        this.books.push(res);
      });
  }

  delete(book: Book) {
    this.http.delete<Book>(`${apiUrl}/${book.id}`)
      .subscribe(() => {
        const index = this.books.indexOf(book);
        this.books.splice(index,1);
      },
      err => this.error = err
    );
  }

  ngOnInit(): void {
    this.getAll();
  }
}
