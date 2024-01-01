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
            console.log("NAME", "==>", details[i].name.common);
            console.log("REGION", "==>", details[i].region);
            console.log("SUB REGION", "==>", details[i].subregion);
            console.log("TOTAL POPULATION", "==>", details[i].population);
        }
    }
    else {
        console.log("Request failed", xhr.status);
    }
}; 

