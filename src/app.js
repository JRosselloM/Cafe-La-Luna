
const elements = [
    {
        "name": "Cannelloni de ternera i foie de pato",
        "price": 12.50
    },
    {
        "name": "Bruschetta Mixta",
        "price": 12.50
    },
    {
        "name": "Ensalada de pulpo",
        "price": 22.50
    },
    {
        "name": "Tartar de salmón",
        "price": 18.50
    }
    
]

const newArr = elements.map(sugerencias_chef);

document.querySelector('.sections').innerHTML = newArr;

function sugerencias_chef(element) {  
    return `
        <div class="section">
            <h4>${element.name}</h4>
            <p>${element.price}€</p>
        </div>C
    `;
}
