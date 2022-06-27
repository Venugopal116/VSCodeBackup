@isTest
public class TestDataUtility 
{
	public static Case newCase(Boolean isInsert)
    {
        Case cs = new Case();
        cs.Origin='web';
        
        if(isInsert)
        {
            insert cs;
            System.debug('cs'+cs);
        }
        return cs;
        
    }
    public static list<Case> newCase(Boolean isInsert,Integer noofRecords)
    {
        list<Case> cslst = new list<Case>();
        for (integer i=0; i< noofRecords ;i++)
        {
            cslst.add(newCase(false));
        }
        if(isInsert)
        {
            insert cslst;
        }
        return cslst;
    }
    
    
    
    public static Registration__c newRegistration(Boolean isInsert)
    {
        Registration__c reg = new Registration__c();
           reg.City__c ='Bangalore';
           reg.Country__c='India';
           reg.Email__c='testindia@gmail.com';
           reg.FirstName__c='RamuRamesh';
           reg.Last_Name__c='Manchu';
          
           if(isInsert )
           {
               insert reg;
           }
        return reg;
          
    }
    public static list<Registration__c> testRegistrations(Boolean isInsert ,integer NumOfObject)
    {      
          list<Registration__c> registrations = new list<Registration__c>();
           
           for (integer i=0 ; i< NumOfObject ; i++){
               
               registrations.add(newRegistration(false));
           }
           if(isInsert)
           {
               insert registrations;
           }
           return registrations;
    }
    
    
    
}