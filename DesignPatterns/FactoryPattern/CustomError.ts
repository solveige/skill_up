export class NotExistingEmployeeType extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NotExistingEmployeeType";
  }
}