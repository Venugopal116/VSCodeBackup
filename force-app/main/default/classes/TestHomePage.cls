@isTest(SeeAllData=true)
public class TestHomePage {
	
   
    static testmethod void  testHomePage()
    {
        LoginHomePage LHP = new LoginHomePage();
        
       
        
        for (Integer i=0;i<4;i++)
        {
            
            if(i==1)
            {
                LHP.password='rami@gmail.com';
                LHP.login();
                
            }else if(i==2)
            {  
              LHP.username='ram';
                    
            }else
            { 
                  
                  LHP.username='rami@gmail.com';
                  LHP.password='sairam';
                  LHP.login();
            }
        }
        
     }
    
    
}