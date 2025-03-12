//consume(using someonelse API) an API vs Serving/Building
//What are the rules
//free or credentials --FREE
//need to know endpoints: endpoint = baseURL + route - Done
//HOW is the data being sent back??? -JSON or XML
//How MUCH data is coming back? -- One object is being retrieved
//How do we get values from the DOM for Lab 3

const BASEURL = "https://dog.ceo/api";
let route = "breeds/image/random";
let endpoint = `${BASEURL}/${route}`;

let button = document.getElementsByTagName("button");
button[0].addEventListener("click",() =>{
    fetch(endpoint)
        .then(data => {
            console.log(data)
            if(data.ok){
                let result = data.json()
                return result
            }
            else{
                throw Error("Jack sucks")
            }
        }) //get data; if ok - parse it, else error handling
        .then(parsedData => {
            let img = document.querySelector("img")
            console.log(parsedData)
            img.setAttribute("src",parsedData.message)
        }) //deal with parsed data
        .catch(error => {
            console.log(error)
        })
})
//fetch skeleton * its a promisedBy
//utilize endpoint
 // error handling
