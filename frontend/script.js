// get current window location
    // Get the complete URL



///get current window location with extension
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var currentURL = tabs[0].url;
    console.log(currentURL);
    if (currentURL.includes('leetcode.com')) {
        var url = new URL(currentURL);
        var pathname = url.pathname;
        var parts = pathname.split('/');
        var questionName = parts[parts.length - 2];


        try{
            psuedoCode
        }
        catch(error){
            console.log("error", error);
        }
        
    } else 
        console.log('This is not a leetcode website.');
}
);






    const psuedoCode = async (questionName) => {
        const res = await fetch(`http://127.0.0.1:5000/chat/${questionName}`);
        try{
            const data = await res.json();
            //console.log(data);
            return data.msg;
        }
        catch(error){
            console.log("error", error);
        }



    }

    const Solution = async (questionName) => {
        const url = `http://127.0.0.1:5000/code/${questionName}/python`;
        const res = await fetch(url);
        try{
            const data = await res.json();
            //console.log(data);
            return data.msg;
        }
        catch(error){
            console.log("error", error);
        }
        
    }


    //createa  a function where if we do an onlcick on the button it will call the api and get the data
    //then we will have to display the data in the html file
    const getChat = async () => {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            var currentURL = tabs[0].url;
            console.log(currentURL);
            if (currentURL.includes('leetcode.com')) {
                var url = new URL(currentURL);
                var pathname = url.pathname;
                var parts = pathname.split('/');
                var questionName = parts[parts.length - 2];
                psuedoCode(questionName).then((data) => {
                    console.log(data);
                    document.getElementById("chat-container").innerHTML = data;

                }
                );
            } else 
                console.log('This is not a leetcode website.');
        }
        );
    }

    const getSolution = async () => {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            var currentURL = tabs[0].url;
            console.log(currentURL);
            if (currentURL.includes('leetcode.com')) {
                var url = new URL(currentURL);
                var pathname = url.pathname;
                var parts = pathname.split('/');
                var questionName = parts[parts.length - 2];
                Solution(questionName).then((data) => {
                    console.log(data);
                    document.getElementById("solution-container").innerHTML = data;

                }
                );
            } else 
                console.log('This is not a leetcode website.');
        }
        );
    }


    document.getElementById("chatbtn").addEventListener("click", getChat);
    document.getElementById("solutionbtn").addEventListener("click", getSolution);



