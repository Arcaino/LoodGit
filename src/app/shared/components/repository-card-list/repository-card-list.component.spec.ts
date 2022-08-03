import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryCardListComponent } from './repository-card-list.component';

describe('RepositoryCardListComponent', () => {
  let component: RepositoryCardListComponent;
  let fixture: ComponentFixture<RepositoryCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepositoryCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
