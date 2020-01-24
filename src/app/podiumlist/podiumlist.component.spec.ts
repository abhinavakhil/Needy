import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodiumlistComponent } from './podiumlist.component';

describe('PodiumlistComponent', () => {
  let component: PodiumlistComponent;
  let fixture: ComponentFixture<PodiumlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodiumlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodiumlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
