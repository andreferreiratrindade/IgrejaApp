import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalCidadePage } from './modal-cidade.page';

describe('ModalCidadePage', () => {
  let component: ModalCidadePage;
  let fixture: ComponentFixture<ModalCidadePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCidadePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalCidadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
