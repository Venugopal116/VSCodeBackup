/* 
    Create a batch class to update Contacts:

    Description of Contact should be updated with
    “Title of AccountName : Account’s Description“

    Description

    Contact which does not have any Account associated with it, should not be updated.
*/
public class BatchApexExample implements Database.Batchable<Sobject>
{
    public Iterable<Sobject> start(Database.BatchableContext bc)
    {
        list<Contact>  con = [select id , AccountId , Description, Account.Description , Account.Name  FROM Contact 
        Where AccountId != null ];
        return con;
    }
    public void execute(Database.BatchableContext bc , list<Contact> con)
    {
        //list<Account> acc= [Select id FROM Account where AccountId in : con.AccountId];

        for (Contact sobj : con)
        {
            sobj.Description = sobj.Account.Description +' '+sobj.Account.Name;
        }

        update con;

    }
    public void finish(Database.BatchableContext bc )
    {
        AsyncApexJob asy = [select id, JobItemsProcessed,NumberOfErrors,Status,TotalJobItems ,Createdby.Email  FROM AsyncApexJob 
        Where id =:bc.getJobId() ];
        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage() ;
        mail.setToAddresses(new list<String>{asy.CreatedBy.Email});
        mail.setSubject('Regarding the Status of the Job'+asy.NumberOfErrors);
        mail.setPlainTextBody('Here see update of all the Job Completed'+asy.JobItemsProcessed+' '+asy.NumberOfErrors);

        //here to send mail 

        Messaging.sendEmail( new list<Messaging.SingleEmailMessage>{mail} );




    }
}