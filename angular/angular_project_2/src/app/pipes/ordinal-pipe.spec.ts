import { OrdinalPipe } from './ordinal-pipe';

describe('OrdinalPipe', () => {
  beforeAll(() => { // 1  time
    console.log('Before All...');
  });
  beforeEach(() => {  // n time
    console.log('Before Each...');
  });
  afterEach(() => {  // n time
    console.log('After Each...');
  });
  afterAll(() => {  // 1 time
    console.log('After All...');
  });

  it('create an instance', () => {
    console.log('It-1...')
    const pipe = new OrdinalPipe();
    expect(pipe).toBeTruthy();
  });

  it('should verify transform method works fine', () => {
    console.log('It-2...')
    const pipe = new OrdinalPipe();
    expect(pipe.transform(NaN)).toBe('');
    expect(pipe.transform(21)).toBe('21st');
    expect(pipe.transform(22)).toBe('22nd');
    expect(pipe.transform(23)).toBe('23rd');
    expect(pipe.transform(24)).toBe('24th');
    expect(pipe.transform(11)).toBe('11th');
    expect(pipe.transform(12)).toBe('12th');
  });
});
