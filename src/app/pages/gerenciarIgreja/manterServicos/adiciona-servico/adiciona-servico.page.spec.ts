import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdicionaServicoPage } from './adiciona-servico.page';

describe('AdicionaServicoPage', () => {
  let component: AdicionaServicoPage;
  let fixture: ComponentFixture<AdicionaServicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionaServicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdicionaServicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
