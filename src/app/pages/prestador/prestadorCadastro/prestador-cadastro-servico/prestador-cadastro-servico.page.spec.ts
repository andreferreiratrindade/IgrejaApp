import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrestadorCadastroServicoPage } from './prestador-cadastro-servico.page';

describe('PrestadorCadastroServicoPage', () => {
  let component: PrestadorCadastroServicoPage;
  let fixture: ComponentFixture<PrestadorCadastroServicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestadorCadastroServicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrestadorCadastroServicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
