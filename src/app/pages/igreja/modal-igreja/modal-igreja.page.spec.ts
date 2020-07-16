import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalIgrejaPage } from './modal-igreja.page';

describe('ModalIgrejaPage', () => {
  let component: ModalIgrejaPage;
  let fixture: ComponentFixture<ModalIgrejaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalIgrejaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalIgrejaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
