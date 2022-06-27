public with sharing class registerhomepage
{ 
   

  
    public string ComPassword{get;set;}
    Registration__c reg;
    
    public registerhomepage(ApexPages.StandardController Controller)
    {
         reg=(Registration__c)Controller.getRecord();
    }
    
    public PageReference Save()
    {   
         ApexPages.Message msg;
         PageReference pgref ;
         if(String.isBlank('reg.Password__c')||String.isBlank('ComPassword') )
         {
             msg = new ApexPages.Message(ApexPages.severity.Error,'Populate the password and confrm password fields');
             apexPages.addMessage(msg);
         }else if(reg.Password__c != ComPassword )
         {    
             msg = new ApexPages.Message(ApexPages.severity.Error,'PasswordMismatch');
             apexPages.addMessage(msg);
         }else
         {
             try
             {
                 insert reg;
                 pgref = new PageReference('/apex/RegisterPageSuccussful');
                
							                         
             }catch(Exception e)
             {
               msg = new ApexPages.Message(ApexPages.severity.Error,e.getMessage());
               apexPages.addMessage(msg); 
             }
         }
         return pgref;
    }
    
    
}