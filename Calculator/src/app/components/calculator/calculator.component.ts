import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  input : string = "";
  counterLeft : number = 0;   //counter for left bracket (
  counterRight : number = 0; //counter for right bracket ')'
  numberOfOperations : number = 1;
  numberOfDecimalPoints : 0 = 0;


  addNumber(number : string) : void {
    if(number == "."){   //added '.' as a number, because it is more affecting number itself
      let lastKey = this.input[this.input.length-1]; // last char in input
      let secondLastKey = this.input[this.input.length-2]; // second last char in input (used for ^2)
      if (this.numberOfDecimalPoints > 0){  // do not want two '.' in one operation
        return;
      }else if(this.input == ""){
        this.input = "0.";
        return;
      }
      else if(lastKey == "/" || lastKey == "*" || lastKey === "-" || lastKey === "+" || lastKey == "(" || lastKey == "√" || lastKey == ")" || secondLastKey == "^"){
        //if last char is operator as well u cant continue
        return;
      }else{
        this.numberOfDecimalPoints++;
        this.input = this.input + number;
      }
    }else {
      this.input =  this.input + number;
    }
  }

  addOperator(operator : string) : void {
    if (this.input == "" && operator == "√"){ //adds √( if input is empty
      this.input = this.input + operator + "(";
      this.counterLeft++;
      return;
    }else if(this.input == ""){   // if input is empty you cant use operators
      return;
    }
    let lastKey = this.input[this.input.length-1]; // last char in input
    let secondLastKey = this.input[this.input.length-2]; // second last char in input (used for ^2)
    if (lastKey == "."){ //cannot use operator after "."
      return;
    }else if((secondLastKey == "^") && (operator == "^2" || operator == "√")){  //cannot use ^2 and √ after ^2
      return;
    }else if(lastKey === "/" || lastKey === "*" || lastKey === "-" || lastKey === "+" || lastKey == "(" || lastKey === "√"){
      //if last char is operator as well u cant continue
      return;
    }else if (operator == "√"){
      this.numberOfDecimalPoints = 0;
      this.input = this.input + operator + "(";
      return;
    }else{
      this.numberOfDecimalPoints = 0;
      this.input = this.input + operator;
    }
  }
  addBracket(bracket : string) {
    let lastKey = this.input[this.input.length-1];
    if(lastKey == "."){  // cannot use bracket after '.'
      return
    }
    if(bracket == "("){
      this.counterLeft++;
      this.input += "(";
    }else if(bracket == ")" && this.counterRight < this.counterLeft){ //cannot have more ) than (
      this.counterRight++
      this.input += ")";
    }
  }

  clear() : void {
    this.input = "";
  }

  clearLast() : void{
    this.input = this.input.substring(0, this.input.length-1)
  }
}
