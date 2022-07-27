public with sharing class wiredDecoratorController {   //  with sharing = System MODE... 
    public wiredDecoratorController() {

        //constructor
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountRecords(){
        list<Account> multiAccount=New List<Account>();
        try {
            multiAccount=[Select id,Name,CreatedDate FROM Account ORDER BY CreatedDate DESC LIMIT 10];
            
        } catch (QueryException e) {
            throw new AuraHandledException(e.getMessage());
        }

        return multiAccount;
    }
    
}  

