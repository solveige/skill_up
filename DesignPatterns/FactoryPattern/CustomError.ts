export class NotExistingType extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NotExistingTypeError";
  }
}