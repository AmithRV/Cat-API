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

function change()
{
    let i = 1;
    let    orderSelector = document.getElementById('orderSelector');
    let     typeSelector = document.getElementById('typeSelector');
    let categorySelector = document.getElementById('categorySelector');
    let    breedSelector = document.getElementById('breedSelector');


    let    order = orderSelector.options[orderSelector.selectedIndex].value;
    let     type = typeSelector.options[typeSelector.selectedIndex].value;
    let category = categorySelector.options[categorySelector.selectedIndex].value;
    let    breed = breedSelector.options[breedSelector.selectedIndex].value;

    //console.log(`${i} => ${order} : ${type} : ${category} : ${breed}`);

    if(category=="None")
    {
        category='';        
    }
    if(breed=="None")
    {
        breed = '';
    }

    fetch(`https://api.thecatapi.com/v1/images/search?limit=9&&order=${order}&mime_types=${type}&category_ids=${category}&breed_ids=${breed}`)
        .then(response => response.json() )
        .then(commits => {
            console.log('response header : ', commits)
            commits.map( 
                (e)=>{
                    let image = document.getElementById(`img${i}`);                                       
                    image.src = `${e.url}`;
                    i = i+1;                   
                })
        });
}

function defaultLoader()
{
    let i = 1;
    fetch(`https://api.thecatapi.com/v1/images/search?limit=9`)
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

defaultLoader();