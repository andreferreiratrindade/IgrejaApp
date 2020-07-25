import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrestadorMenuTopoPage } from './prestador-menu-topo.page';

describe('PrestadorMenuTopoPage', () => {
  let component: PrestadorMenuTopoPage;
  let fixture: ComponentFixture<PrestadorMenuTopoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestadorMenuTopoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrestadorMenuTopoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
