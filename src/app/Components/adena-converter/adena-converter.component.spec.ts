import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdenaConverterComponent } from './adena-converter.component';

describe('AdenaConverterComponent', () => {
  let component: AdenaConverterComponent;
  let fixture: ComponentFixture<AdenaConverterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdenaConverterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdenaConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
