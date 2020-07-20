import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrestadorCadastroIgrejaVinculoPage } from './prestador-cadastro-igreja-vinculo.page';

describe('PrestadorCadastroIgrejaVinculoPage', () => {
  let component: PrestadorCadastroIgrejaVinculoPage;
  let fixture: ComponentFixture<PrestadorCadastroIgrejaVinculoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestadorCadastroIgrejaVinculoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrestadorCadastroIgrejaVinculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
