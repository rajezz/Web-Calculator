import { Component } from "@angular/core";
import { get } from "http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public static OperatorIs: string;
  public static IsOperator: boolean;
  public static firstOperand: number;
  public static secondOperand: number;
  public static Result: number;
  public static expression: string;
  public static setOperator(s: string): void {
    this.OperatorIs = s;
    this.IsOperator = true;
    this.expression += s;
  }
  public static setNumber(a: number): void {
    if (this.IsOperator) {
      this.secondOperand = a;
    } else {
      this.firstOperand = a;
    }
    this.expression += a;
  }
  public static calculate(): void {
    switch (this.OperatorIs) {
      case "+":
        this.Result = this.firstOperand + this.secondOperand;
        break;
      case "-":
        this.Result = this.firstOperand - this.secondOperand;
        break;
      case "*":
        this.Result = this.firstOperand * this.secondOperand;
        break;
      case "/":
        this.Result = this.firstOperand / this.secondOperand;
        break;
      default:
        this.Result = this.firstOperand;
        break;
    }
  }
}
