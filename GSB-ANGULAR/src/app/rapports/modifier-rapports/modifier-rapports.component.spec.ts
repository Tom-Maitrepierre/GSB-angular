import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierRapportsComponent } from './modifier-rapports.component';

describe('ModifierRapportsComponent', () => {
  let component: ModifierRapportsComponent;
  let fixture: ComponentFixture<ModifierRapportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierRapportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierRapportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
