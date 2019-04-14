import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsDetComponent } from './authors-det.component';

describe('AuthorsDetComponent', () => {
  let component: AuthorsDetComponent;
  let fixture: ComponentFixture<AuthorsDetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorsDetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
