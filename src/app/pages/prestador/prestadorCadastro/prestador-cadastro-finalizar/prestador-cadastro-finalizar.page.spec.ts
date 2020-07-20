import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrestadorCadastroFinalizarPage } from './prestador-cadastro-finalizar.page';

describe('PrestadorCadastroFinalizarPage', () => {
  let component: PrestadorCadastroFinalizarPage;
  let fixture: ComponentFixture<PrestadorCadastroFinalizarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestadorCadastroFinalizarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrestadorCadastroFinalizarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
