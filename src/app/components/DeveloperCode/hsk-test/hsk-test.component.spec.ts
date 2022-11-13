import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HskTestComponent } from './hsk-test.component';

describe('HskTestComponent', () => {
  let component: HskTestComponent;
  let fixture: ComponentFixture<HskTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HskTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HskTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
