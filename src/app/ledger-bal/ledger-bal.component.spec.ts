import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgerBalComponent } from './ledger-bal.component';

describe('LedgerBalComponent', () => {
  let component: LedgerBalComponent;
  let fixture: ComponentFixture<LedgerBalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedgerBalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedgerBalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
