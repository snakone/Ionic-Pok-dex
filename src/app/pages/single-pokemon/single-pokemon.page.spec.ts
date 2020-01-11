import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SinglePokemonPage } from './single-pokemon.page';

describe('SinglePokemonPage', () => {
  let component: SinglePokemonPage;
  let fixture: ComponentFixture<SinglePokemonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePokemonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SinglePokemonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
