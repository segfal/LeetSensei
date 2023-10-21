async function fetchData(msg) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ea8fcc0be5msh014de60d714562cp198165j sn0e43a32ae48c',
            'X-RapidAPI-Host': 'concerts-artists-events-tracker.p.rapidapi.com'
        }
    };
    // Write me a prompt to give pseudocode for both optimal and naive solutions to this problem.
    
    message = `Write me a brute force and an optimal solution to leetcode problem ${msg}`
    const res = await fetch(`127.0.0.1:5000/chat/${message}`);
    const data = await res.json();
    console.log(data);
    return data;
    
    
}
fetchData();