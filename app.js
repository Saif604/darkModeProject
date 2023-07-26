const month =['Jan','Feb','Mar','April','May', 'June','July','Aug','Sep','Oct','Nov','Dec'];

const btn = document.querySelector('.btn');

btn.addEventListener('click',(e)=>{
    document.documentElement.classList.toggle('dark-theme');
});


const container = document.querySelector('.articles');

const elem = articles.map((article)=>{
    return `<article class="post">
    <h2>${article.title}</h2>
    <div class="post-info">
      <span>${article.date.getDate()} ${month[article.date.getMonth()-1]}, ${article.date.getUTCFullYear()}</span>
      <span> ${article.length} min read</span>
    </div>
    <p>${article.snippet}</p>
  </article>`
}).join(' ');

container.innerHTML = elem;
