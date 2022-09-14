import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoneComponent } from './dialogone.component';

describe('DialogoneComponent', () => {
  let component: DialogoneComponent;
  let fixture: ComponentFixture<DialogoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
