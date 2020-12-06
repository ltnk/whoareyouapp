import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WayDragonBallPage } from './way-dragon-ball.page';

describe('WayDragonBallPage', () => {
  let component: WayDragonBallPage;
  let fixture: ComponentFixture<WayDragonBallPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WayDragonBallPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WayDragonBallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
