//How to write a Abstract Class 

public virtual  class BankingApplication implements BankAccountInterface
{
    protected @TestVisible  integer Amount,Balance;
    
    public BankingApplication() {
         this.Amount=0;
         this.Balance=0;
    }
    public virtual integer depositeAmount(integer Amount)
    {
        Balance=Balance+Amount;
        return Balance;
    }
    public virtual integer Withdraw(integer Amount)
    {
       try
       {
           if(Balance<Amount)
           {
               throw new BankAppException('InSufficientFund , Your the Balance is');
           }
           Balance-=Amount;
       }catch(BankAppException e)
       {
           System.debug('Error Message'+e.getMessage());
           System.debug('Present Bal is :'+Balance);
        }
        return Balance;
    }
    Public virtual void Bal()
    {
        system.debug('Balance Amount is: '+this.Balance);

    }

    //Implementing the interface
    public string withDrawalLimit()
    {
        return 'Today(s)Withdrwal limit is 50,000';
    }


     


}