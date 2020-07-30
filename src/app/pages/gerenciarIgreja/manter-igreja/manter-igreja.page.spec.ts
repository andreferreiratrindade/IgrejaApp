import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManterIgrejaPage } from './manter-igreja.page';

describe('ManterIgrejaPage', () => {
  let component: ManterIgrejaPage;
  let fixture: ComponentFixture<ManterIgrejaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManterIgrejaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManterIgrejaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
