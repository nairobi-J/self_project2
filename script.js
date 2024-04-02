const apikey = "14eed6d277704143aa7aa76119b901f1";
const blogContainer = document.getElementById('blog-container');
async function fetchRandomNews(){
      try{
        // backtick to make it dynamic
        //pagesize is 10 because i just want to fetch 10 news
         const apiUrl =  `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apikey${apikey}`
        const response = await fetch(apiUrl)
        const data

      }
      catch(error){
        //if api can't fetch random news
       console.error("Error Fetching News", error)
       return []
      }
}