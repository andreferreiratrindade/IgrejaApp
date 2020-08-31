import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalBreveComentarioPage } from './modal-breve-comentario.page';

describe('ModalBreveComentarioPage', () => {
  let component: ModalBreveComentarioPage;
  let fixture: ComponentFixture<ModalBreveComentarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalBreveComentarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalBreveComentarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
