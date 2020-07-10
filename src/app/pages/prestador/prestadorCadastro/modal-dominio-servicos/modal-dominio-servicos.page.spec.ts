import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalDominioServicosPage } from './modal-dominio-servicos.page';

describe('ModalDominioServicosPage', () => {
  let component: ModalDominioServicosPage;
  let fixture: ComponentFixture<ModalDominioServicosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDominioServicosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalDominioServicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
