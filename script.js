var form = document.getElementById("form");

var template = {
    K: "PR",
    V: "01",
    C: "1",
    R: "115038169555061047",
    N: "Vukasin Todorovic",
    I: "RSD",
    SF: "289",
    S: "Donacija",
    //RO: ""
}


function stringifyTemplate() {
    return Object.keys(template).map((key, index) => {
        return `${index > 0 ? "|" : ""}${key}:${template[key]}`
    }).reduce((final, current) => final += current)
}

function shlong(event) {
    var formValues = { 
        people: parseInt(event.target.elements["people"].value),
        cost: parseInt(event.target.elements["cost"].value)
    };
    
    var amount = formValues.cost / formValues.people;
    
    template["I"] += parseFloat(amount).toFixed(2).replace(".",",");
    var data = encodeURIComponent(stringifyTemplate(template))

    window.open(`http://api.qrserver.com/v1/create-qr-code/?data=${data}&size=500x500&margin=5`)
    template["I"] = "RSD";
    event.preventDefault();
}

form.addEventListener('submit', shlong);
