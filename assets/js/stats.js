let urlApi = "https://mindhub-xj03.onrender.com/api/amazing"

fetch(urlApi)

    .then(response => response.json())
    .then(data => {
        //console.log(data)
    const tables = document.getElementById("table1")
    const events = data.events
    //console.log(eventos)
    uploadTable1(events,tables)

    const tables2 = document.getElementById("table2")
    const tables3 = document.getElementById("table3")
        
        calculateGains(events.filter(element => element.assistance),"Food",tables2)
        calculateGains(events.filter(element => element.estimate),"Food",tables2)

        uploadTabla2(events.filter(element => element.estimate),tables2)
        uploadTabla2(events.filter(element => element.assistance),tables3)

    })
    .catch(error => console.log(error))

function uploadTable1(array, contendor) {
    let increasedCapacity = array.reduce((evento1, evento2) => {
        if (evento1.capacity > evento2.capacity) return evento1
        return evento2
    })

    let increasedAttention = array.filter(elemento => elemento.assistance).reduce((evento1, evento2) => {
        if ((evento1.assistance / evento1.capacity) > (evento2.assistance / evento2.capacity)) return evento1
        return evento2
    })

    let lessAttention = array.filter(elemento => elemento.assistance).reduce((evento1, evento2) => {
        if ((evento1.assistance / evento1.capacity) < (evento2.assistance / evento2.capacity)) return evento1
        return evento2
    })

    let trContenedor = document.createElement('tr')
    trContenedor.innerHTML = `
        <td>${increasedAttention.name}: ${increasedAttention.assistance/increasedAttention.capacity*100}%</td>
        <td>${lessAttention.name}: ${lessAttention.assistance/lessAttention.capacity*100}%</td>
        <td>${increasedCapacity.name}: ${increasedCapacity.capacity}</td>`
        contendor.appendChild(trContenedor)
}

function calculateGains(array,nombrecategoria) {
    let arrayFiltrado = array.filter(elemento => elemento.category == nombrecategoria).reduce((total,evento) =>{
        if(evento.assistance != undefined) return total += evento.price * evento.assistance
        return total += evento.price * evento.estimate
    },0)
    return arrayFiltrado
}

function uploadTabla2 (array,contenedor) {
    let categorias = [... new Set(array.map(elemento => elemento.category))]
    let fragmento = document.createDocumentFragment()
    for(let categoria of categorias){
        let trContenedor = document.createElement('tr')
        trContenedor.innerHTML = `<td>${categoria}</td>
        <td>${calculateGains(array,categoria)}</td>
        <td>${calculateAssistance(array,categoria)}%</td>`
        fragmento.appendChild(trContenedor)
    }
    contenedor.appendChild(fragmento)
}

function calculateAssistance (array,nombrecategoria){
    let arrayFiltrado = array.filter(elemento => elemento.category == nombrecategoria).reduce((total,evento) =>{
        if(evento.assistance != undefined) return total += evento.assistance / evento.capacity 
        return total += evento.estimate / evento.capacity
    },0)
    return (arrayFiltrado * 100 /array.filter(elemento => elemento.category == nombrecategoria).length).toFixed(2)
}