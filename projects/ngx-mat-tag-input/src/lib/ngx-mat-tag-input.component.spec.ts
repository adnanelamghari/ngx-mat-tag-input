import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxMatTagInputComponent} from './ngx-mat-tag-input.component';

describe('NgxMatTagInputComponent', () => {
  let component: NgxMatTagInputComponent;
  let fixture: ComponentFixture<NgxMatTagInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxMatTagInputComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMatTagInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
