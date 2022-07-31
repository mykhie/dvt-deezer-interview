import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ArtistDetailsComponent} from './artist-details.component';
import {ArtistService} from "../../services/artists/artist.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe('ArtistDetailsComponent', () => {
  let component: ArtistDetailsComponent;
  let fixture: ComponentFixture<ArtistDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistDetailsComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule],
      providers : [ArtistService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create component', () => {
    expect(component).toBeTruthy();
  });
  it(`isLoading has default value`, () => {
    expect(component.isLoading).toBeDefined();
  });

  it(`Artist tracks has default value`, () => {
    expect(component.tracks).toEqual([]);
  });

  it(`error has default value`, () => {
    expect(component.error).toBeDefined('');
  });
});
