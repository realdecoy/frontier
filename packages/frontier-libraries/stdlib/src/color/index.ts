const VALID_HEX_REGEX = /^#[A-Fa-f0-9]{3,6}$/;

export function isValidHex(text: string): boolean {
  return VALID_HEX_REGEX.test(text.trim());
}
