public with sharing class SOAPAPICALLOUT {
    
    public String CustomObj{get;set;}
    public void getcallOut()
    {
        AccountExampleWsdl.AccountWSDL accapi = new AccountExampleWsdl.AccountWSDL();
        accapi.SessionHeader = new AccountExampleWsdl.SessionHeader_element();
        accapi.SessionHeader.sessionId=rajaUtilityClass.getSessionIds('vikranthpuvvadi1@gmail.com','sairam984525H912XpKE2Htlw7YIaZJ5ibSYf',' https://login.salesforce.com/services/Soap/u/48.0');
        System.debug(accapi.accountObj(CustomObj));

    }
}