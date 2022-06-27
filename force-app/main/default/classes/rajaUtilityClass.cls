public with sharing class rajaUtilityClass {
   public static String getSessionIds(String username, String password ,String Serverurl)
   {
        String requestBody = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:partner.soap.sforce.com">'+
        '<soapenv:Header>'+
        '</soapenv:Header>'+
        '<soapenv:Body>'+
        '<urn:login>'+
        '<urn:username>'+username+'</urn:username>'+
        '<urn:password>'+password+'</urn:password>'+
        '</urn:login>'+
        '</soapenv:Body>'+
        '</soapenv:Envelope>';


        HttpRequest req = new HttpRequest();
        req.setMethod('GET');
        req.setHeader('SOAPAction', 'Login');
        req.setHeader('content-type','text/xml');
        //serverUrl = https://login.salesforce.com/services/Soap/u/48.0
        req.setEndPoint(serverUrl);
        req.setBody(requestBody);


        Http http = new Http();
        HttpResponse response = http.send(req);
        system.debug('response'+response.getBody());
        String sessionId = response.getBody().substringBetween('<sessionId>','</sessionId>');
        System.debug(sessionId);

        return sessionId;




   }
}