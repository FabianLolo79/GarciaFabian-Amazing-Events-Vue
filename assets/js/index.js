const { createApp } = Vue
let urlApi = "https://mindhub-xj03.onrender.com/api/amazing";


    createApp( {
            data() {
                return {
                    events: [],
                    checked: [],
                    valueSearch: '', // input en html
                    eventsFilter: [],
                    checkedFilter: []   

                    //message: 'Hello Vue!'

                }
            },
            created() {
                fetch(urlApi)
                .then(response => response.json())
                .then(data => {
                    this.events = data.events
                    this.eventsFilter = data.events
                    //console.log(this.events)
                    this.checkedFilter = [...new Set(this.events.map(category => category.category)) ]
                }).catch(error => console.log(error))
            },
            methods: {
                filter() {
                    this.eventsFilter = this.events.filter( event => {
                        return (this.checked.includes(event.category) || this.checked.length ===0) &&
                        event.name.toLowerCase().includes(this.valueSearch.toLowerCase())
                    })
                    //console.log('funciona');
                }
            }
        
    }).mount('#app')





/* async function getData() {
    try {
        let response = await fetch(urlApi);
        let data = await response.json();
        let dataEvents = data.events;
        //console.log(dataEvents);
        //console.log(data);

        showCards(dataEvents, 'containerHome');
        createChecks(dataEvents);
        filterAll(dataEvents);

        let checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(check => check.addEventListener("change", () => {
            selectChecked = Array.from(checkboxes).filter(check => check.checked)
                .map(elem => elem.value)
            //console.log("Hola check");
            filterAll(dataEvents);
        }))

        let inputSearch = document.getElementById('input-search');
        inputSearch.addEventListener('keyup', (e) => {
            inputText = inputSearch.value;
            filterAll(dataEvents);
        })
    } catch (error) {
        console.log(error)
    }
}
getData(); */

/* ---------- Mostrar tarjetas dinámicas ----------*/
/* function showCards(array, idcontainer) {
    let container = document.getElementById(idcontainer);
    let fragment = document.createDocumentFragment();
    //console.log(array);
    container.innerHTML = '';
    if (array.length == 0) {
        let div = document.createElement("div");
        div.innerHTML = `<p class="text-center p-1 shadow">Search not found</p>`
        container.appendChild(div);
    } else {
        //console.log(array);
        for (let element of array) {
            let div = document.createElement('div');
            div.className = 'card ms-5 shadow';
            div.style.width = '20rem';
            div.innerHTML =
                ` 
                    <img src="${element.image}" class="card-img-top object-fit-cover mt-3 image" alt="...">
                    <div class="card-body">
                        <h5 class="card-title text-center titulo">${element.name}</h5>
                        <p class="card-text text-center">${element.description}</p>
                        <p class="card-text text-center fw-bold">Date: ${element.date}</p>
                        <div class="d-flex justify-content-between mt-5 mb-0">
                            <p class="fw-bold">Price: $${element.price}</p>
                            <a href="./details.html?_id=${element._id}" class="btn btn-outline-danger shadow">Details</a>
                        </div>
                    </div>
                `
            fragment.appendChild(div);
        }
        container.appendChild(fragment);
    }
} */
//showCards(data.events, 'containerHome');

/* ---------- Checks Category dinamic ----------*/
/* function createChecks(array) {
    let containerCheckHome = document.getElementById('containerCheckHome');
    let fragmentCheck = document.createDocumentFragment();
    let checkCategory = [...(new Set(array.map(data => data.category)))];
    checkCategory.forEach(category => {
        let form = document.createElement('form');
        form.classList.add('d-flex', 'py-5');
        form.innerHTML =
            `
            <div class="col-auto mx-5">
                <div class="form-check category1 category" id="form-category"> 
                    <label class="form-check-label">
                        ${category.replace(" ", "-")} <input class="form-check-input mx-1 shadow prueba" type="checkbox" value=${category.replace(" ", "")}> 
                    </label>
                </div> 
            </div>    
        `
        fragmentCheck.appendChild(form);
    })
    containerCheckHome.appendChild(fragmentCheck);
} */
//createChecks(data.events);

/* ---------- Filter cruzados ----------*/
/* let selectChecked = [];
let inputText = '';

function filterArrayToArray(arrayStrings, arrayObject) {
    return arrayStrings.length === 0 ? arrayObject : arrayObject.filter(elemento => arrayStrings.includes(elemento.category.replace(" ", "")))
}

function filterArrayToString(value, arrayObject) {
    if (value == '') return arrayObject
    return arrayObject.filter(object => object.name.toLowerCase().includes(value.toLowerCase().trim()))
}

/* ---------- Final Filter ----------*/
/* function filterAll(array) {
    let cardsChecksFiltered = filterArrayToArray(selectChecked, array);
    let cardsFinalFiltered = filterArrayToString(inputText, cardsChecksFiltered);
    showCards(cardsFinalFiltered, 'containerHome');
}  */