import { BookService } from './../../../service/book-service.service';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from 'src/app/model/book';

const apiUrl = 'http://localhost:3000/books';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})

export class FormComponent implements OnInit {
  @Input() active: Book;
  @Input() books: Book[];
  imageSrc: string;

  constructor(private http: HttpClient,
    private BookService: BookService) { }

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
        form.reset();
        this.imageSrc = null;
      });
  }

  edit(form: NgForm) {
    this.http.patch<Book>(`${apiUrl}/${this.active.id}`, form.value)
      .subscribe(res => {
        const index = this.books.indexOf(this.active);
        this.books[index] = res
      })
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
      if(this.active) {
        reader.onload = () => {
          this.active.img = reader.result as string;
        }
      } else {
        reader.onload = () => {
          this.imageSrc = reader.result as string;
        }
      }
    }
  }

  ngOnInit(): void {
  }
}
