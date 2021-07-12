import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragareaComponent } from './dragarea.component';

describe('DragareaComponent', () => {
  let component: DragareaComponent;
  let fixture: ComponentFixture<DragareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
