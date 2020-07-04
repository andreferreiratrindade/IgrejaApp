import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrestadorCadastroForm1Page } from './prestador-cadastro-form1.page';

describe('PrestadorCadastroForm1Page', () => {
  let component: PrestadorCadastroForm1Page;
  let fixture: ComponentFixture<PrestadorCadastroForm1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestadorCadastroForm1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrestadorCadastroForm1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
