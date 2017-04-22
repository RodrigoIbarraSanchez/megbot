import { TestBed, async, inject } from '@angular/core/testing';
import { ClasesService } from './clases.service';

describe('ClasesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClasesService]
    });
  });

  it('should ...', inject([ClasesService], (service: ClasesService) => {
    expect(service).toBeTruthy();
  }));
});
