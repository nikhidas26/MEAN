import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfdevelopmentComponent } from './selfdevelopment.component';

describe('SelfdevelopmentComponent', () => {
  let component: SelfdevelopmentComponent;
  let fixture: ComponentFixture<SelfdevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfdevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfdevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
