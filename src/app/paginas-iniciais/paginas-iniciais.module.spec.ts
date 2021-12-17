import { PaginasIniciaisModule } from './paginas-iniciais.module';

describe('PaginasIniciaisModule', () => {
  let paginasIniciaisModule: PaginasIniciaisModule;

  beforeEach(() => {
    paginasIniciaisModule = new PaginasIniciaisModule();
  });

  it('should create an instance', () => {
    expect(paginasIniciaisModule).toBeTruthy();
  });
});
