import { HeroesRootingModule } from './heroes-rooting.module';

describe('HeroesRootingModule', () => {
  let heroesRootingModule: HeroesRootingModule;

  beforeEach(() => {
    heroesRootingModule = new HeroesRootingModule();
  });

  it('should create an instance', () => {
    expect(heroesRootingModule).toBeTruthy();
  });
});
