import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchPrComponent } from './fetch-pr.component';

describe('FetchPrComponent', () => {
  let component: FetchPrComponent;
  let fixture: ComponentFixture<FetchPrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchPrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchPrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
