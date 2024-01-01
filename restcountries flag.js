let xhr=new XMLHttpRequest();
let method = "GET";
let url = "https://restcountries.com/v3.1/all";
xhr.open(method,url);
xhr.send();
xhr.onload = () => {
    if (xhr.status === 200) {
        let details = JSON.parse(xhr.responseText);
        for (let i = 0; i < details.length; i++) {
            console.log("");
            console.log("Flag", "==>", details[i].flags.png);
        }
    }
    else {
        console.log("Request failed", xhr.status);
    }
};
/*
xhr.onload= () =>{
    console.log(JSON.parse(xhr.response));

const obj1= JSON.parse(xhr.response);

    obj1.forEach(country => {
        console.log(country.name)
        console.log(country.region)
        console.log(country.population)
       // console.log(country.flags.png)
    }
})*/
