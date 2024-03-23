var elMovList = document.querySelector('.movie__list')
var elSel__category = document.querySelector('.sel__category')
var partMovie = movies.slice(0,100)
var elOfBody =document.querySelector('.offcanvas-body')

function fnRender(data){
  var locData = JSON.parse(window.localStorage.getItem('localData'))
    elMovList.innerHTML = ''
    data.forEach((item)=>{
        var newLi = document.createElement('li')
        newLi.innerHTML = `
        <div class="card mt-3" style="width: 18rem;">
        <img src="	https://i.ytimg.com/vi/${item.ytid}/hq720.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${item.Title.toString().slice(0, 20)}</h5>
            <p class="card-text">${item.Categories.toString().slice(0, 15)}</p>
            <p class="card-text">${item.movie_year}</p>
            <p class="card-text">${item.imdb_rating}</p>
            <div class="d-flex justify-content-between align-items-center">
            <a href="https://www.youtube.com/watch?v=${item.ytid}" target="blank" class="btn 
            btn-primary">watch movie</a>
            <i onclick="setId('${item.ytid}')" class= "${locData.find((j)=> j.ytid == item.ytid)? 'bi bi-heart-fill  text-danger' : 'bi bi-heart text-dark'}"></i>
            </div>
        </div>
        </div>
        `
    
        elMovList.appendChild(newLi)
    });
}
fnRender(partMovie)

function fnYear(value){
  if(value == 'old'){
    fnRender(partMovie.sort((a,b)=>a.movie_year - b.movie_year));
  }else{
    fnRender(partMovie.sort((a,b)=>b.movie_year - a.movie_year));
  }
}

function fnRanting(value){
    if(value == 'min'){
      fnRender(partMovie.sort((a,b)=>a.imdb_rating - b.imdb_rating));
    }else{
      fnRender(partMovie.sort((a,b)=>b.imdb_rating - a.imdb_rating));
    }
  }


  var CategoriesArr = []
  partMovie.forEach((item)=>{
    if(CategoriesArr.includes(item.Categories) == false){
        CategoriesArr.push(item.Categories)
    }
  })
  CategoriesArr.sort().forEach((item)=>{
    var newOption = document.createElement('option')
    newOption.textContent = item
    newOption.value = item
    elSel__category.appendChild(newOption       )
  })
  
  
   function  fnCategory(value){
    fnRender(partMovie.filter((item)=>item.Categories == value));
   }
  
   function fnSearch(value){
      value.preventDefault()
      var val = value.target.inpSearch.value
      fnRender(part.Movie.filter((item)=>item.Title.toString().toLowerCase().includes(val.toLowerCase()) == true));
   }
  


   var faoArr = []
   if(window.localStorage.getItem('localData')){
    faoArr.JSON.parse(window.localStorage.getItem('localData'))
   }
   function setId(id){
    if(window.localStorage.getItem('localData')){
     faoArr.JSON.parse(window.localStorage.getItem('localData'))
    }
    if(faoArr.find((item)=>item.ytid == id)){
      console.log();
      window.localStorage.setItem('localData', JSON.stringify(faoArr.filter((i)=> i.ytid != id)))

    }else{
      faoArr.push(partMovie.find((item)=> item.ytid == id))       
      window.localStorage.setItem('localData', JSON.stringify(faoArr))
    }
    fnRender(partMovie)
  }
  
  
function fnlocDataRender(){
  if(window.localStorage.getItem('localData')){
    faoArr.JSON.parse(window.localStorage.getItem('localData'))
  }
  elOfBody.innerHTML = ''
  faoArr.forEach((item)=>{
    var newH2 = document.createElement('div')
    newH2.innerHTML = `
    <div class="card mt-3" style="width: 18rem;">
    <img src="	https://i.ytimg.com/vi/${item.ytid}/hq720.jpg" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${item.Title.toString().slice(0, 20)}</h5>
        <p class="card-text">${item.Categories.toString().slice(0, 15)}</p>
        <p class="card-text">${item.movie_year}</p>
        <p class="card-text">${item.imdb_rating}</p>
        <div class="d-flex justify-content-between align-items-center">
        <a href="https://www.youtube.com/watch?v=${item.ytid}" target="blank" class="btn 
        btn-primary">watch movie</a>
        </div>
    </div>
    </div>
    `
    console.log(item.Title);})
    newH2.textContent = item.Title
    elOfBody.append(nb)
}
  
  
  
  