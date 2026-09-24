import { OrdinalPipe } from './ordinal-pipe';

describe('OrdinalPipe', () => {
  const pipe = new OrdinalPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should verify transform method works fine', () => {
    expect(pipe.transform(21)).toBe('21st');
  });
});
