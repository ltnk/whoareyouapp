import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WayOnePiecePage } from './way-one-piece.page';

describe('WayOnePiecePage', () => {
  let component: WayOnePiecePage;
  let fixture: ComponentFixture<WayOnePiecePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WayOnePiecePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WayOnePiecePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
