import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KazaPage } from './kaza.page';

describe('KazaPage', () => {
  let component: KazaPage;
  let fixture: ComponentFixture<KazaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KazaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KazaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
