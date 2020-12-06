import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WayDeathNotePage } from './way-death-note.page';

describe('WayDeathNotePage', () => {
  let component: WayDeathNotePage;
  let fixture: ComponentFixture<WayDeathNotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WayDeathNotePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WayDeathNotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
