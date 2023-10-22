
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
        apiCall(questionName).then((data) => {
            console.log(data);
        }
        );

        

        console.log('Question Name: ' + questionName);
        apiCall(questionName);
        console.log('Question Name: ' + questionName);
    } else 
        console.log('This is not a leetcode website.');
}
);






    const apiCall = async (questionName) => {
        const res = await fetch(`http://127.0.0.1:5000/chat/${questionName}`);
        try{
            const data = await res.json();
            console.log(data);
            return data;
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
                apiCall(questionName).then((data) => {
                    console.log(data);
                    document.getElementById("chat").innerHTML = data;
                }
                );
            } else 
                console.log('This is not a leetcode website.');
        }
        );
    }