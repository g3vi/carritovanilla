console.log('Conectado')
const cards=document.getElementById('cards')
const items=document.getElementById('items')
const footer=document.getElementById('footer')
const templateCard=document.getElementById('template-card').content
const templateFooter=document.getElementById('template-footer').content
const templateCarrito=document.getElementById('template-carrito').content
const fragment=document.createDocumentFragment()
let carrito={}

document.addEventListener('DOMContentLoaded',()=>{
    fetchData()
})

cards.addEventListener('click',e=>{
    addCarrito(e)
})

const addCarrito=e=>{
    console.log(e)
    if(e.target.classList.contains(btn-success)){
        console.log(e.target.parentElement)
    }
}

const fetchData=async()=>{
    const productos=await fetch('../api/api.json')
    const data=await productos.json()
    pintarCards(data)

}

const pintarCards=data=>{
    data.forEach(item=>{
        templateCard.querySelector('img').setAttribute("src",item.url)
        templateCard.querySelector('h5').textContent=item.title
        templateCard.querySelector('p').textContent=item.precio
        templateCard.querySelector('button').dataset.id=item.id
        const clone=templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
}