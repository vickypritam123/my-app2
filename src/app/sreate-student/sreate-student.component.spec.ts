import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SreateStudentComponent } from './sreate-student.component';

describe('SreateStudentComponent', () => {
  let component: SreateStudentComponent;
  let fixture: ComponentFixture<SreateStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SreateStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SreateStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
