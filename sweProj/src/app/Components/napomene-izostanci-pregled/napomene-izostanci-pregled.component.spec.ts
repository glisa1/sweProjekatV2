import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NapomeneIzostanciPregledComponent } from './napomene-izostanci-pregled.component';

describe('NapomeneIzostanciPregledComponent', () => {
  let component: NapomeneIzostanciPregledComponent;
  let fixture: ComponentFixture<NapomeneIzostanciPregledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NapomeneIzostanciPregledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NapomeneIzostanciPregledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
