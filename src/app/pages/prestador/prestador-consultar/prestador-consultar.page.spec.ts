import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrestadorConsultarPage } from './prestador-consultar.page';

describe('PrestadorConsultarPage', () => {
  let component: PrestadorConsultarPage;
  let fixture: ComponentFixture<PrestadorConsultarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestadorConsultarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrestadorConsultarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
