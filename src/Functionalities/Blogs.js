
module.exports=class Blogs{
    static   async createPost(title,smallSummary,postContent,tags,selectedFile) {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("smallSummary", smallSummary);
        formData.append("postContent", postContent);
        formData.append("tags",tags);
        formData.append("file", selectedFile);
      
        
        const response = await fetch("http://localhost:4000/createblog", {
          method: "POST",
          credentials: "include",
          body: formData,
        })
        
        if(response.status==201) {
           return {error:false,msg:"Blog Created:)"}
        }
        return {error:true,msg:"Unable to create please try again"};
        
      }
}