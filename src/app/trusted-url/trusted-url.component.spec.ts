import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustedUrlComponent } from './trusted-url.component';

describe('TrustedUrlComponent', () => {
  let component: TrustedUrlComponent;
  let fixture: ComponentFixture<TrustedUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrustedUrlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrustedUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
