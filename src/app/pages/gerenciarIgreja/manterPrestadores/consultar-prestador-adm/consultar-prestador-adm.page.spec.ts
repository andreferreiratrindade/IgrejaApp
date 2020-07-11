import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsultarPrestadorAdmPage } from './consultar-prestador-adm.page';

describe('ConsultarPrestadorAdmPage', () => {
  let component: ConsultarPrestadorAdmPage;
  let fixture: ComponentFixture<ConsultarPrestadorAdmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarPrestadorAdmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultarPrestadorAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
