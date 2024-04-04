import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PazienteTriageComponent } from './paziente-triage.component';

describe('PazienteTriageComponent', () => {
  let component: PazienteTriageComponent;
  let fixture: ComponentFixture<PazienteTriageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PazienteTriageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PazienteTriageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
