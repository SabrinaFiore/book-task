import { Book } from './../../model/book';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
})

export class BookComponent implements OnInit {

  constructor(private http: HttpClient) { }

  getAll() {
    this.http.get<Book>('http://localhost:3000/books')
    .subscribe((res: Book) => {
      console.log(res);
    })
  }

  ngOnInit(): void {
    this.getAll();
  }
}
