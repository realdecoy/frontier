import { isValidEmail } from '.';

describe(isValidEmail, () => {
  it('returns true for valid emails', () => {
    expect(isValidEmail('gt@email.com')).toBeTruthy();
    expect(isValidEmail('gt1@email.com')).toBeTruthy();
    expect(isValidEmail('gt2+@email.com')).toBeTruthy();
    expect(isValidEmail('gt-2+@email.com')).toBeTruthy();
    expect(isValidEmail('gt1*@email.com')).toBeTruthy();
    expect(isValidEmail('gt2%@email.com')).toBeTruthy();
    expect(isValidEmail('gt2$@email.com')).toBeTruthy();
    expect(isValidEmail('gt2#@email.com')).toBeTruthy();
    expect(isValidEmail('gt2!@email.com')).toBeTruthy();
    expect(isValidEmail('gt2~@email.com')).toBeTruthy();
  });

  it('returns false for invalid hex codes', () => {
    expect(isValidEmail('gt2@@email.com')).toBeFalsy();
  });
});