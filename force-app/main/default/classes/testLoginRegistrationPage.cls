@isTest
class testLoginRegistrationPage 
{   
    @isTest 
	private static void testRegistrationPage()
    {
       test.startTest();
           
           Registration__c  reg = TestDataUtility.newRegistration(false);
           System.debug(reg);
           ApexPages.StandardController Controller = new ApexPages.StandardController(reg);  
        // ApexPages StandardController uses  SBOJECT AS INPUT
           registerhomepage regs = new registerhomepage(Controller);
         regs.Save();
           
           
       test.stopTest();
    }
    
    @isTest
    private static void tesRegistrationPages()
    {
        test.startTest();
          list<Registration__c> reg = TestDataUtility.testRegistrations(false, 4);
           System.debug(reg);
          //Registration__c  reg = TestDataUtility.newRegistration(false);
           System.debug(reg);
          
        
          for (integer i=0;i<reg.size();i++)
          {   
               ApexPages.StandardController Controller = new ApexPages.StandardController(reg[i]);  
        	// ApexPages StandardController uses  SBOJECT AS INPUT
           	   registerhomepage regs = new registerhomepage(Controller);
              if(i==1)
              {
                  regs.ComPassword ='test';
              }else if (i==2)
              {
                  regs.ComPassword =null;
              }
             regs.Save(); 
          }
          
         
        test.stopTest();
    }
}