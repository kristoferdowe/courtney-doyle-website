import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiocomponentComponent } from './biocomponent.component';

describe('BiocomponentComponent', () => {
  let component: BiocomponentComponent;
  let fixture: ComponentFixture<BiocomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiocomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiocomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
