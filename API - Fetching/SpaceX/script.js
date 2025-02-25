const search = document.getElementById('search');

async function fetchDetails(params) {
    try{
        const res = await fetch(`https://api.spacexdata.com/v5/launches/latest`)
        const data = await res.json();
        console.log(data.name);
        console.log(data.cores[0].landing_type);
        
        const div = document.getElementById('detail');
        div.innerHTML = `<p>Rocket Name: ${data.name}</p>
                        <p>Landing sucess: ${data.cores[0].landing_success}</p>`;
        
    }
    catch(error){
        console.log(error);
        
    }
}

search.addEventListener('click', fetchDetails);