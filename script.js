let movieNameReferance=document.getElementById("movie-name");
let searchBtn = document.getElementById("search-Btn");
let result=document.getElementById("result");

let getMovieApı =()=>{
    let movieName=movieNameReferance.value;
    let url=`https://www.omdbapi.com/?t=${movieName} & apikey=${key}`;

    if(movieName.length <=0){
        result.innerHTML =`<h3 class="message">Please enter a movie name</h3> `
    }
    else{
        fetch(url)
        .then((resp) => resp.json())
        .then((data) => {

            if(data.Response == 'True'){ 
                console.log(data);
                console.log(data.Poster);
                console.log(data.Title);
                console.log(data.imdbRating);
                console.log(data.Rated);
                console.log(data.Year);
                console.log(data.Runtime);
                console.log(data.Genre);
                console.log(data.Plot);
                console.log(data.Actors);
                console.log(data.Language);
                console.log(data.Writer);
                console.log(data.Director);

                result.innerHTML = ` 
                <div class="info">
                    <img src=${data.Poster} class="poster">
                    <div>
                        <h2>${data.Title}</h2>
                        <div class="rating">
                           <img src="./images/star-icon.png">
                           <h4>${data.imdbRating}</h4>
                        </div>
                        <div class="details">
                            <span>${data.Rated}</span>
                            <span>${data.Year}</span>
                            <span>${data.Runtime}</span>  
                        </div>
                        <div class="genre">
                            <div>${data.Genre.split(",").
                            join("</div><div>")}</div>
                        </div>
                    </div>
                </div>
                <h3>Plot:</h3>
                <p>${data.Plot}</p>
                <h3>Cast:</h3>
                <p>${data.Actors}</p>
                <br>

                <div class="ek">
                   <h4>Languages:<span>${data.Language}</span></h4>
                   <h4>Writer:<span>${data.Writer}</span></h4>
                   <h4>Director:<span>${data.Director}</span></h4>
                </div>

                `;

            }
            else{
                result.innerHTML =`<h3 class="message">${data.Error}</h3> `;
            }

        })

        .catch(() => {
            result.innerHTML =`<h3 class="message">Error Occured</h3> `

        })

    

    }


}

searchBtn.addEventListener("click",getMovieApı);
