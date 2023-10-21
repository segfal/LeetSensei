async function fetchData() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ea8fcc0be5msh014de60d714562cp198165j sn0e43a32ae48c',
            'X-RapidAPI-Host': 'concerts-artists-events-tracker.p.rapidapi.com'
        }
    };

    const res = await fetch();
    const record = await res.json();

    document.getElementById("concerts").innerHTML = record.data.map(item => item.name);
}
fetchData();