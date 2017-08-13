//Counter Code

var button = document.getElementById("counter");

button.onclick = function() {
    
    //Create a request
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function() {
        if(requst.readyState === XMLHttpRequest.DONE) {
            //Take some acton
            if(request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                //Render the variable in the correct span
                span.innerHTML = counter.toString();
            }
        }
        // Not done yet
    };
    //Make the request
    request.open('GET','http://akshitbhalla13.imad.hasura-app.io/counter',true);
    request.send(null);
};