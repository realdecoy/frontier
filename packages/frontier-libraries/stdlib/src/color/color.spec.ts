import { isValidHex } from '.';

describe(isValidHex, () => {
  it('returns true for valid hex codes', () => {
    expect(isValidHex('#fff')).toBeTruthy();
    expect(isValidHex('#fFf')).toBeTruthy();
    expect(isValidHex('#ffffff')).toBeTruthy();
    expect(isValidHex('#fFfFFf')).toBeTruthy();
    expect(isValidHex('#aB12C4')).toBeTruthy();
  });

  it('returns false for invalid hex codes', () => {
    expect(isValidHex('#gggggg')).toBeFalsy();
    expect(isValidHex('gggggg')).toBeFalsy();
    expect(isValidHex('fff')).toBeFalsy();
    expect(isValidHex('ffffff')).toBeFalsy();
    expect(isValidHex('#12&ffg')).toBeFalsy();
    expect(isValidHex('#23g453')).toBeFalsy();
    expect(isValidHex('#f')).toBeFalsy();
  });
});
