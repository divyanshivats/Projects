
let search = document.getElementById('search')
let result = document.getElementById('meaning')


async function fetchWord() {
    let word = document.getElementById('word').value;
    console.log(word);
    
    try{
        const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        const data = await res.json();
        console.log(data[0].meanings[0].definitions[0].definition);
        
        result.textContent = data[0].meanings[0].definitions[0].definition;
    }
    catch(error){
        console.error(error); 
        result.textContent = "Word not found!";

    }
}
search.addEventListener('click', fetchWord);


