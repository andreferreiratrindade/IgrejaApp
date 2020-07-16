import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalUFPage } from './modal-uf.page';

describe('ModalUFPage', () => {
  let component: ModalUFPage;
  let fixture: ComponentFixture<ModalUFPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalUFPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalUFPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
