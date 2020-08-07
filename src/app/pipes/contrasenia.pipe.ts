import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "contrasenia",
})
export class ContraseniaPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    return args[0] ? "*".repeat(value.length) : value;
  }
}
