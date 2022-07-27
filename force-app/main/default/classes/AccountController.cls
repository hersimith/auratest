public with sharing class AccountController {  
    // with sharing : sharing rule RESPECT.
    // without sharing : DO NOT RESPECT SHARING RULE.
    // inherited sharing

    
    public AccountController() {

    }

    @AuraEnabled(cacheable=true)
    public static List<Account> retrive(){
        List<Account> retrievedmultiAcc= new List<Account>();
        try {
            retrievedmultiAcc = AccountHelper.retriveaccount();
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }

        return retrievedmultiAcc;
    }
}