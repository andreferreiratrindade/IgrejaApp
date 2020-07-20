import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LocalAtendimentoPage } from './local-atendimento.page';

describe('LocalAtendimentoPage', () => {
  let component: LocalAtendimentoPage;
  let fixture: ComponentFixture<LocalAtendimentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalAtendimentoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LocalAtendimentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
