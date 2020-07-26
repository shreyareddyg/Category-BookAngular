import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfAllCategoryComponent } from './list-of-all-category.component';

describe('ListOfAllCategoryComponent', () => {
  let component: ListOfAllCategoryComponent;
  let fixture: ComponentFixture<ListOfAllCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfAllCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfAllCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
