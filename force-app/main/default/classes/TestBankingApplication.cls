//writing a test class for BankingApplication
@isTest
class TestBankingApplication 
{
     static testMethod void TestBankingApplication()
     {
        BankingApplication ba = new BankingApplication();
        //ba.Balance;
        //ba.Amount;
        ba.Bal();
        ba.depositeAmount(9000);
        
        ba.Withdraw(8000);
        system.assertEquals(1000,ba.Balance);

        BankingApplication ba1 = new BankingApplication();
        ba1.Withdraw(8000);
        
        //system.assertEquals(expected, actual)
    }
}