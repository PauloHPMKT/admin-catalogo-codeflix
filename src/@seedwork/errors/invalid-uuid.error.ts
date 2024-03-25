export default class InvalidUUIDError extends Error {
  constructor(message?: string) {
    super(message || "Id must be a valid UUID");
    this.name = 'InvalidUUIDError';
  };
}