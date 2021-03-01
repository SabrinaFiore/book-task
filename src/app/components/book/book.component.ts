import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
})

export class BookComponent implements OnInit {

  constructor(private http: HttpClient) { }

  getAll() {
    // this.http.get<Book>(url: 'http://localhost:3000/books')
    // .subscribe(next:(res:Book: Book))
  }

  ngOnInit(): void {
  }

}
