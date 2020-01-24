import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBadgesComponent } from './add-badges.component';

describe('AddBadgesComponent', () => {
  let component: AddBadgesComponent;
  let fixture: ComponentFixture<AddBadgesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBadgesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
