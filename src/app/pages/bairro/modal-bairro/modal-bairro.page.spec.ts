import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalBairroPage } from './modal-bairro.page';

describe('ModalBairroPage', () => {
  let component: ModalBairroPage;
  let fixture: ComponentFixture<ModalBairroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalBairroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalBairroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
