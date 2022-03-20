fetch('https://api.thecatapi.com/v1/breeds')
    .then(response => response.json())
    .then(commits => {
            commits.map( 
                (e)=>{                    
                    let option = document.createElement('option');
                    option.innerHTML = `${e.name}`;
                    option.value = `${e.id}` 
                    document.getElementById('breedSelector').append(option);                   
                })
        });

fetch('https://api.thecatapi.com/v1/categories')
    .then(response => response.json())
    .then(commits => {
            commits.map( 
                (e)=>{                    
                    let option = document.createElement('option');
                    option.innerHTML = `${e.name}`;
                    option.value = `${e.id}` 
                    document.getElementById('categorySelector').append(option);                   
                })
        });


function orderSelector()
{
    let i = 1;
    let e = document.getElementById('orderSelector');
    let order = e.options[e.selectedIndex].value;

    fetch(`https://api.thecatapi.com/v1/images/search?limit=9&page=10&order=${order}`)
        .then(response => response.json())
        .then(commits => {
            commits.map( 
                (e)=>{      
                    let image = document.getElementById(`img${i}`);                                       
                    image.src = `${e.url}`;
                    i = i+1;                   
                })
        });
}

function typeSelector()
{
    let i = 1;
    let e = document.getElementById('typeSelector');
    let type = e.options[e.selectedIndex].text;

    fetch(`https://api.thecatapi.com/v1/images/search?mime_types=${type}&limit=9`)
        .then(response => response.json())
        .then(commits => {
            commits.map( 
                (e)=>{      
                    let image = document.getElementById(`img${i}`);                                       
                    image.src = `${e.url}`;
                    i = i+1;                   
                })
        });
}

function categorySelector()
{
    let i = 1;
    let e = document.getElementById('categorySelector');
    let category = e.options[e.selectedIndex].value;
    fetch(`https://api.thecatapi.com/v1/images/search?category_ids=${category}&limit=9&page=10&order=Rand`)
        .then(response => response.json())
        .then(commits => {
            commits.map( 
                (e)=>{      
                    let image = document.getElementById(`img${i}`);                                       
                    image.src = `${e.url}`;
                    i = i+1;                   
                })
        });
}

function breedSelector()
{
    let i = 1;
    let e = document.getElementById('breedSelector');
    let breed_id = e.options[e.selectedIndex].value;
    
    fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breed_id}&limit=9&page=10&order=Rand`)
        .then(response => response.json())
        .then(commits => { 
                commits.map( 
                    (e)=>{    
                        let image = document.getElementById(`img${i}`);                                       
                        image.src = `${e.url}`;
                        i = i+1;                                  
                    })
        });
}

function defaultSelector()
{
    let i = 1;
    fetch('https://api.thecatapi.com/v1/images/search?limit=9&page=10&order=Rand')
        .then(response => response.json())
        .then(commits => {
            commits.map( 
                (e)=>{        
                    let image = document.getElementById(`img${i}`);                                       
                    image.src = `${e.url}`;
                    i = i+1;                   
                })
        });
}

defaultSelector();