// to generate the res api class keyword shpuld be @RestResource
@RestResource(urlMapping ='/cases/*')
global class CaseApi 
{
   @HttpGet
    global static Case getcase()
    {
        //endpoint url =https://https://rajagopaltypreslimitted-dev-ed.my.salesforce.com/services/apexrest/Cases/0009191
        RestRequest  req = RestContext.request;
        String CaseNum = req.requestURI.substring(req.requestURI.lastIndexof('/')+1);
        return [select id ,Status ,Origin,CaseNumber FROM Case where CaseNumber=: CaseNum];
        //return 'My Api is Working';
        
        
    }
}