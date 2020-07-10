import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrestadorCadastroForm4Page } from './prestador-cadastro-form4.page';

describe('PrestadorCadastroForm4Page', () => {
  let component: PrestadorCadastroForm4Page;
  let fixture: ComponentFixture<PrestadorCadastroForm4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestadorCadastroForm4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrestadorCadastroForm4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
