import { Book } from './../../model/book';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { formatCurrency } from '@angular/common';

const apiUrl = 'http://localhost:3000/books';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
})

export class BookComponent implements OnInit {

  books: Book[];
  error: any;
  active: Book;
  imageSrc: string;

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
    this.http.patch<Book>(`${apiUrl}/${this.active.id}`, form.value)
      .subscribe(res => {
        const index = this.books.indexOf(this.active);
        this.books[index] = res
      })
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

  reset(form: NgForm) {
    this.active = null;
    this.imageSrc = null;
    form.reset();
  }

  readUrl(event: any) {
    const reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageSrc = reader.result as string;
      }
    }
  }

  ngOnInit(): void {
    this.getAll();
  }
}
