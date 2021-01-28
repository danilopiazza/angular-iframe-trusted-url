import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UntrustedUrlComponent } from './untrusted-url.component';

describe('UntrustedUrlComponent', () => {
  let component: UntrustedUrlComponent;
  let fixture: ComponentFixture<UntrustedUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UntrustedUrlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UntrustedUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
