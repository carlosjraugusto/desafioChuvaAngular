import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontmidComponent } from './fontmid.component';

describe('FontmidComponent', () => {
  let component: FontmidComponent;
  let fixture: ComponentFixture<FontmidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FontmidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FontmidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
