import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { AppModule } from 'src/app/app.module';
import { DataService } from 'src/app/services/data.service';
import { APP_BASE_HREF } from '@angular/common';
import { MockMovieData } from 'src/app/services/Mockdata';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [ HomeComponent ],
      providers: [HomeComponent, {provide: DataService, useClass: MockMovieData}],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have products', () => {
    expect(component.movies.length).toBe(5);
  });
})
