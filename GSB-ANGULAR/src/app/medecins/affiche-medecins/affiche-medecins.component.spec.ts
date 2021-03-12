import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheMedecinsComponent } from './affiche-medecins.component';

describe('AfficheMedecinsComponent', () => {
  let component: AfficheMedecinsComponent;
  let fixture: ComponentFixture<AfficheMedecinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficheMedecinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheMedecinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
