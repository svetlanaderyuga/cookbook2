import { AuthorsService } from './authors.service';
import { TestBed } from '@angular/core/testing';



describe('AuthorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthorsService = TestBed.get(AuthorsService);
    expect(service).toBeTruthy();
  });
});
