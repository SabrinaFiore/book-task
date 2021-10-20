import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivenComponent } from './driven.component';

describe('DrivenComponent', () => {
  let component: DrivenComponent;
  let fixture: ComponentFixture<DrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrivenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
