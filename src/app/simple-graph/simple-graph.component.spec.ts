import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleGraphComponent } from './simple-graph.component';

describe('SimpleGraphComponent', () => {
  let component: SimpleGraphComponent;
  let fixture: ComponentFixture<SimpleGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
