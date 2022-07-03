// sat 2nd july 2022
public class YouTubeJSONResultHandler {
    
    
    public List<YouTubeJSONResultHandler.Item> items { get; set; }    
    
    public class Response {
        public String kind { get; set; }
        public String etag { get; set; }
        public String nextPageToken { get; set; }
        public String prevPageToken { get; set; }
        public YouTubeJSONResultHandler.PageInfo pageInfo { get; set; }
        public List<YouTubeJSONResultHandler.Item> items { get; set; }
    }
    
    public class PageInfo {
        public Integer totalResults { get; set; }
        public Integer resultsPerPage { get; set; }
    }
    
    public class Item {
        public String kind { get; set; }
        public String etag { get; set; }
        public YouTubeJSONResultHandler.Id id { get; set; }
        public YouTubeJSONResultHandler.Snippet snippet { get; set; }
    }
    
    public class Id {
        public String kind { get; set; }
        public String videoId { get; set; }
    }
    
    public class Snippet {
        public Datetime publishedAt { get; set; }
        public String channelId { get; set; }
        public String title { get; set; }
        public String description { get; set; }
        public YouTubeJSONResultHandler.Thumbnails thumbnails { get; set; }
        public String channelTitle { get; set; }
        public String liveBroadcastContent { get; set; }
    }
    
    public class Thumbnails {
        public YouTubeJSONResultHandler.Thumbnail medium { get; set; }
        public YouTubeJSONResultHandler.Thumbnail high { get; set; }
    }
    
    public class Thumbnail {
        public String url { get; set; }
    }
    
}