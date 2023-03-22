/* Con api */

let urlApi = 'https://mindhub-xj03.onrender.com/api/amazing'

async function callDetails() {
    try{
        const response = await fetch(urlApi)
        const data = await response.json()
        const dataEvents = await data.events
        const queryString = location.search;
        const params = new URLSearchParams(queryString);
        const id = params.get("_id");
        const events = data.events.find(event => event._id == id);

        details(events, "eventContainer")
    } catch(error){
        console.log(error);
    }
}
callDetails();

function details(array, idContainer) {
    const div = document.getElementById(idContainer)
    div.innerHTML = `<div class="row">
    <div class="col-md-6">
        <img src="${array.image}" alt="..." class="mb-4 mb-md-0 pt-5" style="width: 600px; height: 500px;"/>
    </div>
    <div class="col-md-6 d-flex flex-column justify-content-center pt-3">
        <h2 class="details_title">${array.name}</h2>
        <p>${array.description}</p>
        <p class="h6"><strong>Date: </strong>${array.date}</p>
        <p><strong>Category: </strong>${array.category}</p>
        <p><strong>Place: </strong>${array.place}</p>
        <p><strong>Capacity: </strong>${array.capacity}</p>
        <p><strong>Assistance: </strong>${array.assistance}</p>
        <p><strong>Price: </strong>$${array.price}</p>
        </div>
    </div>`
}












/* así era antes  */
/*      let containerDetails = document.getElementById ("containerDetails")
        let dataEvents = data.events;
        
        const id = location.search
        const parametro = new URLSearchParams(id);
        //console.log(parametro);
        const idNumber = parseInt(parametro.get("_id"));
        //console.log(idNumber);

        const evento = dataEvents.find(element => element._id === idNumber);
        console.log(evento);
        
        containerDetails.innerHTML = `<div class="row">
        <div class="col-md-5">
            <img src="${evento.image}" alt="..." class="mb-4 mb-md-0 ms-0 pt-5" style="width: 400px; height: 300px;"/>
        </div>
        <div class="col-md-6 d-flex flex-column justify-content-center ps-5 pt-3">
            <h2 class="details_title">${evento.name}</h2>
            <p>${evento.description}</p>
            <p class="h6"><strong>Date: </strong>${evento.date}</p>
            <p><strong>Category: </strong>${evento.category}</p>
            <p><strong>Place: </strong>${evento.place}</p>
            <p><strong>Capacity: </strong>${evento.capacity}</p>
            <p><strong>Assistance: </strong>${evento.assistance}</p>
            <p><strong>Price: </strong>$${evento.price}</p>
            </div>
        </div>` */
        



