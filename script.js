const apikey = "14eed6d277704143aa7aa76119b901f1";
const blogContainer = document.getElementById("blog-container");
const searchField = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
async function fetchRandomNews(){
      try{
        // backtick to make it dynamic
        //pagesize is 10 because i just want to fetch 10 news
         const apiUrl =  `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apikey=${apikey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        //console.log(data);
        return data.articles;
        

      }
      catch(error){
        //if api can't fetch random news
       console.error("Error Fetching News", error);
       return [];
      }
}
searchButton.addEventListener('click',async () => {
    const query = searchField.value.trim()
    if(query !== ""){
      try{
        const articles = await fetchNewsQuery(query);
        displayBlogs(articles);
      } catch(error){
        console.log("error fetching news by query", error);

      }
    }

})
async function fetchNewsQuery(query){

  try{
    // backtick to make it dynamic
    //pagesize is 10 because i just want to fetch 10 news
     const apiUrl =  `https://newsapi.org/v2/everything?q=${query}&pageSize=10&apikey=${apikey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    //console.log(data);
    return data.articles;
    

  }
  catch(error){
    //if api can't fetch random news
   console.error("Error Fetching News", error);
   return [];
  }
}
function displayBlogs(articles) {
   blogContainer.innerHTML = "";
   articles.forEach((article) => {
    const blogCard = document.createElement("div");
    blogCard.classList.add("blog-card");
    const img = document.createElement("img");
    img.src = article.urlToImage;
    img.alt = "oppps sorry";
    const title = document.createElement("h2");
    //title.textContent = article.title;
    const truncatedTitle = article.title.length > 30 ? article.title.slice(0, 30) + ".....": article.title;
    title.textContent = truncatedTitle;
    const description = document.createElement("p");
    // const des = article.description.length > 120 ? article.description.slice(0, 120) + "...." : article.description;
  
    // description.textContent = des;
    description.textContent = article.description;


    blogCard.appendChild(img);
    blogCard.appendChild(title);
    blogCard.appendChild(description);
    blogCard.addEventListener('click',() => {
      window.open(article.url, "_blank");
    })
    blogContainer.appendChild(blogCard);
   });
}
(async () => {
  try{
   const articles = await fetchRandomNews();
   displayBlogs(articles);
  
  } catch(error) {
    console.error("Error Fetching News", error);
  
  }
})();