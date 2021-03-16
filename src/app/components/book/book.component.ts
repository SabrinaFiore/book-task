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
  active: Book;

  constructor(private http: HttpClient) { }

  getAll() {
    this.http.get<Book[]>(apiUrl)
      .subscribe((res: Book[]) => {
        this.books = res;
      },
      err => this.error = err
    );
  }

  save(form: NgForm) {
    if(this.active) {
      this.edit(form)
    } else {
      this.add(form)
    }
  }

  add(form: NgForm) {
    this.http.post<Book>(`${apiUrl}`, form.value)
      .subscribe((res: Book) => {
        this.books.push(res);
      });
  }

  edit(form: NgForm) {
    this.http.put<Book>(`${apiUrl}/${this.active.id}`, form.value)
      .subscribe(res => {
        const index = this.books.indexOf(this.active);
        this.books[index] = res
      })
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

  setActive(book: Book) {
    this.active = book;
  }

  reset() {
    this.active = null;
  }

  ngOnInit(): void {
    this.getAll();
  }
}
