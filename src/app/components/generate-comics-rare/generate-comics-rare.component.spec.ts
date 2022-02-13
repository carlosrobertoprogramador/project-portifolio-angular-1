import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateComicsRareComponent } from './generate-comics-rare.component';

describe('GenerateComicsRareComponent', () => {
  let component: GenerateComicsRareComponent;
  let fixture: ComponentFixture<GenerateComicsRareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateComicsRareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateComicsRareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
