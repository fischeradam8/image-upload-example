export abstract class MetaError extends Error {
  protected code: 400 | 500;

  constructor(code: 400 | 500) {
    super();
    this.code = code;
  }

  public getCode(): 400 | 500 {
    return this.code;
  }
}
