public with sharing class LoginHomePage 
{
    public string username{get;set;}
    public string password{get;set;}
    list<Registration__c> reg;
    public ApexPages.Message msg;
    
   /* public LoginHomePage()
    {
         this.msg=msg;
    }*/
    
    public void login()
    {
        ApexPages.Message msg;
           
        reg=[select id,Email__c,Password__c FROM Registration__c where Email__c =:username];
                         
        if(reg == null & reg.size()==0)
            {
                	 msg= new ApexPages.Message(ApexPages.Severity.Error,'User Do not Exist');
                	 Apexpages.addmessage(msg);
            }   
         else{
               if( reg[0].Password__c !=  password ) 
                {
                     msg= new ApexPages.Message(ApexPages.Severity.Error,'Please Enter a correct user id');
                     Apexpages.addmessage(msg);
                }else
                {
                    msg= new ApexPages.Message(ApexPages.Severity.info,'Login is Successfull');
                    Apexpages.addmessage(msg);
                }
            }
            }
    
 }