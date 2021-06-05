import { v4 } from 'uuid';

export class Uuid {
  readonly value: string;

  constructor(value: string) {
    this.value = value;
  }

  static random(): Uuid {
    return new Uuid(v4());
  }
}
