import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {  
  @Output() login: EventEmitter<any> = new EventEmitter();
  
  loginForm: FormGroup;
  submitted = false;
  validate = true;
  item;

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit(usernameRef, pswRef, input: HTMLInputElement) {
    console.log(usernameRef);
    if(input.value = " ") {
      this.submitted = true;
    }

    if (this.loginForm.invalid) {
        return;
    }

    if(usernameRef.value && pswRef.value) {
      // enable button
      this.validate = false;
    }
  }

}
