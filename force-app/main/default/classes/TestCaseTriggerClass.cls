@isTest//(seeAllData='true')
public class TestCaseTriggerClass 
{
	static testmethod void caseTriggerUnitTest()
    {       
            
            Case cs = TestDataUtility.newCase(false);
        	System.debug('cs Details'+cs);
        	cs.Status='New';
            System.debug('cs1 Details'+cs);
       	    insert cs;
        
        	
            
           // trigger logic
           test.startTest();
            try
            {
             
             delete cs;
                 
                
            }catch(Exception e)
            {
                 System.assert(e.getMessage().Contains('Your are not allowed to delete the record which are already Closed'));
            }
           test.stopTest();
               
           
    }
    static testmethod void CaseTriggerbulkUnitTest()
    {
        list<Case> cslst =  TestDataUtility.newCase(false,200);
        for (integer i=0;i<10;i++)
        {
            cslst[i].Status='Closed';
        }
        insert cslst;
        
          // trigger logic
            test.startTest();
            try
            {
             delete cslst;
                
            }catch(Exception e)
            {
                 System.assert(e.getMessage().Contains('Your are not allowed to delete the record which are already Closed'));
           test.stopTest();
    	}
 	}
}