import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './driven';

@Component({
  selector: 'app-driven',
  templateUrl: './driven.component.html',
  styleUrls: ['./driven.component.scss']
})

export class DrivenComponent implements OnInit {
  
  name: string;
  age: number;
  city: string;
  user: User;

  users = [
    {
      name: "Lucio",
      age: 44,
      city: "Padova"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  add(input: HTMLInputElement) {
    // this.users.push(input.value);
    input.value = " ";
    input.focus();
  }

  addUser(form: NgForm) {
    this.users.push(form.value);
    console.log("test on: " + form.value.name);
  }

  setActive(user: User) {
    this.user = user;
  }
}
