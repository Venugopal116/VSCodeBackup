// In Child Class We need to Write the Override  Keyword for the methods which we are going to override
public class SavingBankAccount extends BankingApplication 
{
    public override integer depositeAmount(integer Amount)
    {        
            try
            {
                if (Amount>100000)
                {
                    throw  new BankAppException('You Can(t) Deposite the Amount More than 1 lakh & Toady Limit is Exceeded');
                }
                Balance+=Amount;
                 
                for(integer i =0 ; i<52 ; i++)
                {
                    FutureClass.myFutureMethod();
                }

            }catch(BankAppException e)
            {
                System.debug('Error Message'+ e.getMessage());
            }
            return Balance;
        
        
    }
}