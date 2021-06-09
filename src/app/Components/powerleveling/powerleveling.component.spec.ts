import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PowerlevelingComponent } from './powerleveling.component';

describe('PowerlevelingComponent', () => {
  let component: PowerlevelingComponent;
  let fixture: ComponentFixture<PowerlevelingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerlevelingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerlevelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
