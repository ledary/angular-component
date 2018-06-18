import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
*/
@Pipe({name: 'exponentialStrength'})
export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: number, exponent: number): number {

    if(value>exponent){
        return exponent;
    }if(value <=0){
        return 1;
    }
    return value;
    // let exp = parseFloat(exponent);
    // let a = Math.pow(value, isNaN(exp) ? 1 : exp);
    // alert(a);
    // return a;
  }
}