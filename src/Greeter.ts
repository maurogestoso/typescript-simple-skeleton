export class Greeter {
  constructor(private readonly name: string) {
    this.name = name;
  }
  greet() {
    return `Hello ${this.name} from TypeScript Simple Skeleton`;
  }
}
