module.exports = class UserCookie {
  static async getCookie() {
    var response = await fetch("http://localhost:4000/usercookies", {
      credentials: "include",
    })
    if(response.status==400) return {username:null,userId:null};
    response = response.json();

    return {username:response["username"],userId:response["userId"]}
      
  }
};
