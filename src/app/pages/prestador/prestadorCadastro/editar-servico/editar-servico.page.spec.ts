import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarServicoPage } from './editar-servico.page';

describe('EditarServicoPage', () => {
  let component: EditarServicoPage;
  let fixture: ComponentFixture<EditarServicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarServicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarServicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
