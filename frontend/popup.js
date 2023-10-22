// Get the complete URL
var currentURL = window.location.href;

if (currentURL.includes('leetcode.com')) {
    var url = new URL(currentURL);
    var pathname = url.pathname;
    var parts = pathname.split('/');
    var questionName = parts[parts.length - 1];
    console.log('Question Name: ' + questionName);
} else 
    console.log('This is not a leetcode website.');
