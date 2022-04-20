/**
 * Whether a string is considered valid email address
 *
 * Regex pattern is from HTML's spec for validating email in input type='email'
 * https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address
 */

const VALID_EMAIL_PATTERN =
  // disabling eslint to match exact string mentioned in HTML spec
  // eslint-disable-next-line no-useless-escape
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

// istanbul ignore next: trivial
export function isValidEmail(email: string): boolean {
  return VALID_EMAIL_PATTERN.test(email);
}
