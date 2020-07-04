import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CriarIgrejaPage } from './criar-igreja.page';

describe('CriarIgrejaPage', () => {
  let component: CriarIgrejaPage;
  let fixture: ComponentFixture<CriarIgrejaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarIgrejaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CriarIgrejaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
