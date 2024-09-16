// classname,tagName ek se jada return element return karta he
const quote=document.getElementsByTagName("blockquote")[0];
const author = document.getElementsByClassName("author")[0];
const newbtn=document.querySelector(".quote_btn")
const tweet=document.querySelector('.tweetbtn');
const apilink ="https://quotes-api-self.vercel.app/quote";
let temp="";
const getData=async()=>{
  const response=await fetch(apilink);
  const data=await response.json();
  quote.innerHTML=data.quote;
  author.innerHTML=data.author;
  temp=data.quote;
}
getData();
newbtn.addEventListener("click",()=>{
  getData();
})
tweet.addEventListener("click",()=>{
  window.open(  "https://twitter.com/intent/tweet?text="+ temp,"Twitter post","width:200","height:200");
})