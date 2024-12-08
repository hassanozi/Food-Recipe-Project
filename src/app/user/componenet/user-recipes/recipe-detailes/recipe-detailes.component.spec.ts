import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailesComponent } from './recipe-detailes.component';

describe('RecipeDetailesComponent', () => {
  let component: RecipeDetailesComponent;
  let fixture: ComponentFixture<RecipeDetailesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeDetailesComponent]
    });
    fixture = TestBed.createComponent(RecipeDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
