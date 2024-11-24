import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonInlineComponent } from './non-inline.component';

describe('NonInlineComponent', () => {
  let component: NonInlineComponent;
  let fixture: ComponentFixture<NonInlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NonInlineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
