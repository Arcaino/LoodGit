import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonRepositoryCardComponent } from './skeleton-repository-card.component';

describe('SkeletonRepositoryCardComponent', () => {
  let component: SkeletonRepositoryCardComponent;
  let fixture: ComponentFixture<SkeletonRepositoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkeletonRepositoryCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeletonRepositoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
