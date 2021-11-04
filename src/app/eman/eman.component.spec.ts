import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmanComponent } from './eman.component';

describe('EmanComponent', () => {
  let component: EmanComponent;
  let fixture: ComponentFixture<EmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
