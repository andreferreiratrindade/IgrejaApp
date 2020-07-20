import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalSituacaoPrestadorPage } from './modal-situacao-prestador.page';

describe('ModalSituacaoPrestadorPage', () => {
  let component: ModalSituacaoPrestadorPage;
  let fixture: ComponentFixture<ModalSituacaoPrestadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSituacaoPrestadorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalSituacaoPrestadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
