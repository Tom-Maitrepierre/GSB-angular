import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerRapportsComponent } from './creer-rapports.component';

describe('CreerRapportsComponent', () => {
  let component: CreerRapportsComponent;
  let fixture: ComponentFixture<CreerRapportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerRapportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerRapportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
