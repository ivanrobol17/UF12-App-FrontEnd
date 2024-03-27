import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoriPazComponent } from './contatori-paz.component';

describe('ContatoriPazComponent', () => {
  let component: ContatoriPazComponent;
  let fixture: ComponentFixture<ContatoriPazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContatoriPazComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContatoriPazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
