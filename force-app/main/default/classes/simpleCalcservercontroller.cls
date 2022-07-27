public with sharing class simpleCalcservercontroller {
    public simpleCalcservercontroller() {

    }

@AuraEnabled
public static decimal sumServerController(DEcimal num1,Decimal num2){
    return num1+num2;
            }

 @AuraEnabled
public static decimal subServerController(DEcimal num1,Decimal num2){
    return num1-num2;
            }
}
