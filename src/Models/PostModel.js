module.exports = class blogPost {
    constructor(title,smallSummary,postContext,file){
        this.title = title;
        this.smallSummary=smallSummary;
        this.postContext=postContext;
        this.file =file;
    }
}