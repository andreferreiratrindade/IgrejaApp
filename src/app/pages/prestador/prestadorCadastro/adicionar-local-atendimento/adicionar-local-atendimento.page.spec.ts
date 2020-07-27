import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdicionarLocalAtendimentoPage } from './adicionar-local-atendimento.page';

describe('AdicionarLocalAtendimentoPage', () => {
  let component: AdicionarLocalAtendimentoPage;
  let fixture: ComponentFixture<AdicionarLocalAtendimentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarLocalAtendimentoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdicionarLocalAtendimentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
