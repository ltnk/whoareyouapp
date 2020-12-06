import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WayKimetsuNoYaibaPage } from './way-kimetsu-no-yaiba.page';

describe('WayKimetsuNoYaibaPage', () => {
  let component: WayKimetsuNoYaibaPage;
  let fixture: ComponentFixture<WayKimetsuNoYaibaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WayKimetsuNoYaibaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WayKimetsuNoYaibaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
