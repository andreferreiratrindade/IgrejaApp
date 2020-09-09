import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EsqueciMinhaSenhaPage } from './esqueci-minha-senha.page';

describe('EsqueciMinhaSenhaPage', () => {
  let component: EsqueciMinhaSenhaPage;
  let fixture: ComponentFixture<EsqueciMinhaSenhaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsqueciMinhaSenhaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EsqueciMinhaSenhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
