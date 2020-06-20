import { TestBed } from '@angular/core/testing';

import { DataretrievalService } from './dataretrieval.service';
import { AppModule } from '../app.module';

describe('DataretrievalService', () => {
  let service: DataretrievalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
    });
    service = TestBed.inject(DataretrievalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
