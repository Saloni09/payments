import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentsService {
     payMap = {
        upi: 2,
        credit: 3,
        debit: 0,
        wallet: 0
    };
      discountPer = {
        more100: {
            'newbie': 100,
        },
        more500 : {
            'abc10': 5,
            'spcl15': 10
        },
        more1000 : {
            'abc10' : 10,
            'spclka': 12 
        }
    }
    constructor(){
         
    }
    
    calculateTaxes(amount: number) {
        const tax = amount * 0.05;
        return amount + tax;
    }
    discountedAmt(amount: number, code: string){
        let range = '';
        if(amount >= 1000){
            range = 'more1000';
        }
        if(amount >= 500){
            range = 'more500';
        }
        if(amount >= 200){
            range = 'more200';
        }
        if(this.discountPer[range][code]){
            return amount * this.discountPer[range][code]
        }else{
            return -1;
        }
    }
}
