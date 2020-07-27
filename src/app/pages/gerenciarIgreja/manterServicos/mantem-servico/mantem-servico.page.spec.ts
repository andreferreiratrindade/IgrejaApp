import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MantemServicoPage } from './mantem-servico.page';

describe('MantemServicoPage', () => {
  let component: MantemServicoPage;
  let fixture: ComponentFixture<MantemServicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantemServicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MantemServicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
