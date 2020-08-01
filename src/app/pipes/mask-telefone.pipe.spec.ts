import { MaskTelefonePipe } from './mask-telefone.pipe';

describe('MaskTelefonePipe', () => {
  it('create an instance', () => {
    const pipe = new MaskTelefonePipe();
    expect(pipe).toBeTruthy();
  });
});
