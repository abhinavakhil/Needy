import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPodiumComponent } from './add-podium.component';

describe('AddPodiumComponent', () => {
  let component: AddPodiumComponent;
  let fixture: ComponentFixture<AddPodiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPodiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPodiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
