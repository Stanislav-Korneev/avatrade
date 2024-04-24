export function inputIsEmpty(value: string): string {
  return (!value || value.length === 0) ? 'field is required' : '';
}