import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalServicosPage } from './modal-servicos.page';

describe('ModalServicosPage', () => {
  let component: ModalServicosPage;
  let fixture: ComponentFixture<ModalServicosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalServicosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalServicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
