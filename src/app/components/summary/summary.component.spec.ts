import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SummaryComponent } from './summary.component';
import { HttpClientModule } from '@angular/common/http';

describe('SummaryComponent', () => {
  let component: SummaryComponent;
  let fixture: ComponentFixture<SummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SummaryComponent],
      imports: [HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryComponent);
    component = fixture.componentInstance;
    spyOn(component, 'setRobotsData');
    spyOn(component, 'setPartsData');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have summary data object', () => {
    expect(component.summary).toBeDefined();
  });

  describe('SummaryComponent ngOnInit', async() => {
    it('should call set-data functions for robots and pars ', () => {
      // expect(component.setRobotsData).toHaveBeenCalled();
      // expect(component.setPartsData).toHaveBeenCalled();
    });
  });
  describe('SummaryComponent.setRobotsData', () => {
    it('should do filtering and sorting functions for robots', () => {
      // implement
    });
  });
  describe('SummaryComponent.setPartsData', () => {
    it('should do filtering and sorting functions for parts', () => {
      // implement
    });
  });
  describe('SummaryComponent.setPartsData', () => {
    it('should do filtering and sorting functions for parts', () => {
      // implement
    });
  });
});
