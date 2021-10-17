import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/book';

const apiUrl = 'http://localhost:3000/books';

@Injectable({
  providedIn: 'root'
})

export class BookService {

  getAll(): Observable <Book[]> {
    return this.http.get<Book[]>(apiUrl);
  }

  constructor(private http: HttpClient) { }

}
