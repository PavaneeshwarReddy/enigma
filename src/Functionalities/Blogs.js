
module.exports=class Blogs{
    static   async createPost(title,smallSummary,postContext,selectedFile) {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("smallSummary", smallSummary);
        formData.append("postContext", postContext);
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