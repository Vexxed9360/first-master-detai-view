import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundsDetailsComponent } from './sounds-details.component';

describe('SoundsDetailsComponent', () => {
  let component: SoundsDetailsComponent;
  let fixture: ComponentFixture<SoundsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoundsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
