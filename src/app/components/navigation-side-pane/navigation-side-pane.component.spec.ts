import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationSidePaneComponent } from './navigation-side-pane.component';

describe('NavigationSidePaneComponent', () => {
  let component: NavigationSidePaneComponent;
  let fixture: ComponentFixture<NavigationSidePaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationSidePaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationSidePaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
