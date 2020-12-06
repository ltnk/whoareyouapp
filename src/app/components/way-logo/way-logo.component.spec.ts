import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WayLogoComponent } from './way-logo.component';

describe('WayLogoComponent', () => {
  let component: WayLogoComponent;
  let fixture: ComponentFixture<WayLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WayLogoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WayLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
