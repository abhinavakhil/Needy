import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPodiumComponent } from './view-podium.component';

describe('ViewPodiumComponent', () => {
  let component: ViewPodiumComponent;
  let fixture: ComponentFixture<ViewPodiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPodiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPodiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
