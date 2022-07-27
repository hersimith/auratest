public with sharing class AccountHelper {
    public AccountHelper() {
        
    }


    public static List<Account> retriveaccount(){
        List<Account> multiAcc = New List<Account>();
        try {
            multiAcc=[SELECT id,Name,Phone,Credit_Card__c,CreatedDate FROM Account ORDER BY CreatedDate DESC LIMIT 20];
        } catch (QueryException e) {
            throw new AuraHandledException(e.getMessage());
        }

        return multiAcc;
    }
}
