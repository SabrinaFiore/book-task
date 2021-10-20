import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driven',
  templateUrl: './driven.component.html',
  styleUrls: ['./driven.component.scss']
})
export class DrivenComponent implements OnInit {
  
  name: string;
  age: number;
  users = [
    {
      name: "Lucio",
      age: 44,
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

  addUser(form) {
    this.users.push(form.value);
    console.log("test on: " + form.value.name);
  }
}
