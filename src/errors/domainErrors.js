class DomainError extends Error {}

export class ValidationError extends DomainError {}

export function isDomainError(error) {
  return error instanceof DomainError;
}
