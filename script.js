const menuEmail = document.getElementById("menuEmail")
const displayMenu= document.getElementById("displayMenu")
const menuMovil = document.getElementById("menuMovil")
const menuMovilDisplayed = document.getElementById("menuMovilDisplayed")
const carritodeCompras = document.getElementById("carritodeCompras")
const ordenesdeCarrito = document.getElementById('ordenesdeCarrito')
const cardsContainer = document.getElementById('cardsContainer')
const mainContainer = document.getElementById('mainContainer')
const productDescription = document.querySelector('.productDescription')
const descriptionCloseIcon = document.getElementById('descriptionCloseIcon')
let productList = []

productList.push({
  name: 'Bike',
  price : '200',
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  description: 'Descubre la libertad de desplazarte de manera saludable y divertida con esta bicicleta de alta calidad, perfecta para pasear por la ciudad o explorar nuevos caminos en la naturaleza.',

})
productList.push({
  name: 'Computadora',
  price : '600',
  image: "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2018/11/MacBook-Air-2018-1.jpg?fit=2500%2C1667&quality=50&strip=all&ssl=1",
  description: 'Descubre la potencia, la elegancia y la versatilidad de esta impresionante computadora portátil, perfecta para cualquier necesidad personal o profesional, con un diseño único y un sistema operativo de última generación.',

})
productList.push({
  name: 'TV',
  price : '400',
  image: "https://fotografias.lasexta.com/clipping/cmsimages01/2022/02/28/4D1F4D23-7A7F-4E41-BDAB-F6A7B7FA5B95/98.jpg?crop=1300,731,x0,y13&width=1900&height=1069&optimize=high&format=webply",
  description: ' Disfruta de la mejor experiencia de entretenimiento en casa con esta espectacular televisión, con una calidad de imagen y sonido increíbles y una gran variedad de funciones y aplicaciones.',
})
productList.push({
  name: 'moto',
  price : '800',
  image: "https://www.yamahamotos.cl/wp-content/uploads/2022/06/r7_azul.jpg",
  description: 'Experimenta la emoción y la velocidad en todo su esplendor con esta impresionante motocicleta, diseñada para llevarte a cualquier lugar con estilo y seguridad.',

})
productList.push({
  name: 'escritorio',
  price : '350',
  image: "https://sodimac.scene7.com/is/image/SodimacCL/5481449_01?wid=800&hei=800&qlt=70",
  description: 'Optimiza tu espacio de trabajo y aumenta tu productividad con este moderno y funcional escritorio, perfecto para trabajar, estudiar o realizar tareas desde la comodidad de tu hogar.',
})
productList.push({
  name: 'audifonos',
  price : '250',
  image: "https://www.semana.com/resizer/SLYLG6KI20pwStL7pUoR8Ta9GLw=/1920x0/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/A6Q4G6AUXJFWJDJL6XQ657WRQI.jpg",
  description: 'Sumérgete en un mundo de sonido envolvente y cristalino con estos audífonos de alta fidelidad, diseñados para ofrecer una experiencia auditiva única y sin interrupciones.',
})
productList.push({
  name: 'xbox',
  price : '450',
  image: "https://www.lapolar.cl/dw/image/v2/BCPP_PRD/on/demandware.static/-/Sites-master-catalog/default/dwa805ebd2/images/large/26062462.jpg?sw=1200&sh=1200&sm=fit",
  description: 'La Xbox está basada en la arquitectura x86,​ misma tecnología empleada en las computadoras personales. El equipo cuenta con un Procesador Central de 32 bits, basado en el diseño del Pentium III, tiene una velocidad de reloj de 733 MHz, tiene 64 MiB de RAM, del tipo DDR SDRAM y corre una velocidad de 200 MHz.',
})



function renderProduct (list){
  for (product of list){
    const productCard = document.createElement('div')
    productCard.classList.add('product-card')
         const productImg = document.createElement('img')
         productImg.setAttribute('src', product.image)
         productCard.addEventListener('click', () => {
          productDescription.classList.remove('inactive')
          renderDescription(event);
         })
    productCard.appendChild(productImg)

    const productInfo = document.createElement('div')
    productInfo.classList.add('product-info')
    productCard.appendChild(productInfo)
         const productInfoDiv = document.createElement('div')
    productInfo.appendChild(productInfoDiv)
              const productInfoDivPrice = document.createElement('p')
                   productInfoDivPrice.innerText = '$' + product.price
          productInfoDiv.appendChild(productInfoDivPrice)
              const productInfoDivName = document.createElement('p')
                   productInfoDivName.innerText = product.name 
          productInfoDiv.appendChild(productInfoDivName)
    
    const productFigureCar = document.createElement('figure')
    productInfo.appendChild(productFigureCar)
         const productFigureCarIcon = document.createElement('img')
         productFigureCarIcon.setAttribute('src', './icons/bt_add_to_cart.svg')
         productFigureCar.appendChild(productFigureCarIcon)

    cardsContainer.appendChild(productCard)
    mainContainer.appendChild(cardsContainer)

         // div class="product-card">
         //         <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
         //         <div class="product-info">
         //           <div>
         //             <p>$120,00</p>
         //             <p>Bike</p>
         //           </div>
         //           <figure>
         //             <img src="./icons/bt_add_to_cart.svg" alt="">
         //           </figure>
         //         </div>
         //       </div>
  }
}

function ntoggle (id, id2){
  if (!id2.classList.contains('inactive')){
    id2.classList.add('inactive')
    id.classList.toggle('inactive')
  } else{
    id.classList.toggle('inactive')
  }
}
function renderDescription (event){
  displayMenu.classList.add('inactive')
  ordenesdeCarrito.classList.add('inactive')
  const productList2 = productList
  const elemento = productList2.find(producto => producto.image == event.target.src)
  let even = event.composedPath()
  const descriptionImage = document.getElementById('descriptionPicture')
  descriptionImage.setAttribute('src', even[0].src )
  const productinfo2 = even[1].childNodes[1]
  const descriptionPrice = document.getElementById('descriptionPrice')
  const price = productinfo2.querySelector('div p:first-child')
  descriptionPrice.innerText = price.textContent
  const descriptionName = document.getElementById('descriptionName')
  const name = productinfo2.querySelector('div p:nth-child(2)')
  descriptionName.innerText = name.textContent 
  const descriptionP = document.getElementById('descriptionP')
  descriptionP.innerText = elemento.description
  
}
menuMovil.addEventListener('click', ()=> {
  productDescription.classList.add('inactive')
  ntoggle(menuMovilDisplayed, ordenesdeCarrito)
})
menuEmail.addEventListener("click", () => {
  productDescription.classList.add('inactive')
  ntoggle(displayMenu, ordenesdeCarrito)
} )
carritodeCompras.addEventListener('click', ()=>{
  productDescription.classList.add('inactive')
  displayMenu.classList.add('inactive')
  ntoggle(ordenesdeCarrito, menuMovilDisplayed)
})
descriptionCloseIcon.addEventListener('click', ()=>{
  productDescription.classList.add('inactive')
})

renderProduct(productList)

