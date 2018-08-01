import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should increment',() => {
    const currentCount = component.counter;
    component.incerement();
    fixture.detectChanges();
    expect(component.counter).toBeGreaterThan(currentCount);
  });
  it('should decrement',() => {
    component.incerement();
    const currentCount = component.counter;
    component.decrement();
    fixture.detectChanges();
    expect(currentCount).toBeGreaterThan(component.counter);
  });
  it('validate min rule',() => {
    const currentCount = component.counter;
    component.decrement();
    fixture.detectChanges();
    expect(currentCount).toBe(component.counter);
  });
  it('validate max rule',() => {
    component.incerement();
    component.incerement();
    component.incerement();
    component.incerement();
    const currentCount = component.counter;
    component.incerement();
    fixture.detectChanges();
    expect(currentCount).toBe(component.counter);
  });
});
