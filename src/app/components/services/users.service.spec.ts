import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers:[UsersService]

    })
    .compileComponents();
  });

});
