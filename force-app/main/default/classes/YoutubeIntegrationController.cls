// sat 2nd july 2022
public class YoutubeIntegrationController {
    
    private static final String SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';
    private static final String API_KEY = 'AIzaSyDEdWwQ4XOI3_2R9TPMwCjHV7NFMVYT8jc'; //Put your API_KEY here. get from google api cloud    
    
    @AuraEnabled(cacheable=true)
    public static list<mywrapper> getYouTubeVideos(string searchKey) {
        
        searchKey = searchKey == null ? 'salesforce' : searchKey;//need to check this onnce
        
        //https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&q={searchKeyEncodinhere_Venu}&key={Apikeyhere_venu}   
        // YouTube API Callouts
        Http http = new Http();
        HttpRequest requestYT = new HttpRequest();
        Httpresponse responseFromYoutube = null;
        String endpoint  = SEARCH_URL +   //using here search url and appending extension url to handle search to make request from salesforce to youtube
            '?part=snippet' +
            '&maxResults=20' +
            '&type=video' +
            '&q=' + EncodingUtil.urlEncode(searchKey, 'UTF-8') +
            '&key=' + API_KEY;
        
        requestYT.setEndPoint(endpoint);
        requestYT.setMethod('GET');     
        responseFromYoutube = http.send(requestYT);
        if(responseFromYoutube.getStatusCode() == 200) {
          System.debug(' http Response=================>'+responseFromYoutube);  
        }
        
        
        //Deserializing json data
        //https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_class_System_Json.htm#apex_System_Json_deserialize
        YouTubeJSONResultHandler.Response response = (YouTubeJSONResultHandler.Response)JSON.deserialize(responseFromYoutube.getBody(), YouTubeJSONResultHandler.Response.class);
        System.debug(' Json to Obj Response=================>'+response);  
        List<YouTubeJSONResultHandler.Item> items  =  response.items;
         System.debug(' list of response items =================>'+items); 
        
        //Loading or filling  Wrapper Data for lightning component
        //Filling Wrapper Data for lightning component
            List<mywrapper> wrp  = new List<mywrapper>();
    
            for (YouTubeJSONResultHandler.Item itemObj : items) {
                mywrapper YTWrap = new mywrapper();
                YTWrap.videoId = itemObj.id.videoId;
                YTWrap.description = itemObj.Snippet.description;
                YTWrap.thumbnails = itemObj.Snippet.thumbnails.medium.url;
                YTWrap.title = itemObj.Snippet.title;
                YTWrap.channelTitle = itemObj.Snippet.channelTitle;
    
                wrp.add(YTWrap);
            }
         System.debug(' Loades Wrapper=================>'+wrp);
        
            return wrp;
    }
    public class mywrapper{
        
            @AuraEnabled public string videoId {get;set;}
            @AuraEnabled public string description {get;set;}
            @AuraEnabled public String thumbnails {get;set;}
            @AuraEnabled public String title {get;set;}
            @AuraEnabled public String channelTitle {get;set;}
            @AuraEnabled public String publishedAt  {get;set;}
        }
    
}