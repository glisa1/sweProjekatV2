import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcenePregledComponent } from './ocene-pregled.component';

describe('OcenePregledComponent', () => {
  let component: OcenePregledComponent;
  let fixture: ComponentFixture<OcenePregledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcenePregledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcenePregledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
