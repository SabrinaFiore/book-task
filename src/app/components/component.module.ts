import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DrivenComponent } from './driven/driven.component';
import { BookComponent } from './book/book.component';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: 'component',
        children: [
          {
            path: 'book',
            component: BookComponent
          },
          {
            path: 'driven',
            component: DrivenComponent
          },
        ]
      }
    ]),
    CommonModule
  ],
})
export class ComponentModule { }
