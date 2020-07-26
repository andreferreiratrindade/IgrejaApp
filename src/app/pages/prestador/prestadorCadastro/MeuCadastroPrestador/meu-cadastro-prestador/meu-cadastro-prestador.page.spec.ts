import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MeuCadastroPrestadorPage } from './meu-cadastro-prestador.page';

describe('MeuCadastroPrestadorPage', () => {
  let component: MeuCadastroPrestadorPage;
  let fixture: ComponentFixture<MeuCadastroPrestadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuCadastroPrestadorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MeuCadastroPrestadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
