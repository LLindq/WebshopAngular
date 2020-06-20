import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NotfoundComponent } from './notfound.component';
import { AppModule } from 'src/app/app.module';
import { By } from '@angular/platform-browser';

describe('NotfoundComponent', () => {
  let component: NotfoundComponent;
  let fixture: ComponentFixture<NotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [ NotfoundComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a span with information', () => {
    component.ngOnInit();
    const notFoundMessage = fixture.debugElement.query(By.css('#nfTest')).nativeElement;
    expect(notFoundMessage.innerHTML).toContain('Any complaints may be sent to the person behind this link')
  });
});
