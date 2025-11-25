  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-analytics.js";
  import { 

          getFirestore,
          collection,
          query,
          where,
          getDocs, 
          doc,
          setDoc

          } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyC0CGJl5W0obVzSwzCSJ_Qb_FkhofWMmTE",
    authDomain: "pag-web-3237f.firebaseapp.com",
    projectId: "pag-web-3237f",
    storageBucket: "pag-web-3237f.firebasestorage.app",
    messagingSenderId: "678432426968",
    appId: "1:678432426968:web:3996bf5e51e089c8c840ad",
    measurementId: "G-0WBNF7RELS"
  };


  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);


const nombre = document.querySelector("#name");
const email = document.querySelector("#email")
const message = document.querySelector("#message")
const cartCount = document.querySelector (".cart-count");
const carticon = document.querySelector (".cart-icon");
const cartModal = document.getElementById (".cart-modal");
const closeButton = document.querySelector (".close-button");
const cartItemsContainer = document.getElementById("cart-itens");
const cartTotalAmount = document. getElementById ("cart-total-amount");
const botonEnviar = document.querySelector ("#enviar")
const muestraProductos = document.querySelector ("#muestraproductos")


botonEnviar.addEventListener("click", async function(){
await setDoc(doc(db, "clientes", email.value), {
  name: nombre.value,
  email: email.value,
  message: message.value
});

})

document.addEventListener("DOMContentLoaded", async function(){
  const q = query(collection(db, "productos"));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  muestraProductos.innerHTML += `
    <div class="product-card">
       <img src="./img/${doc.id}.jpeg" alt="Producto 1">
       <h1>${doc.data().nombredelproducto}</h1>
        <a href="#" class="btn-secondary">ver ahora</a>
     </div>`
  });
})

document.addEventListener("DOMContentLoaded", async function(){
  const q = query(collection(db, "productos"));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  muestraProductos.innerHTML += `
    <div class="product-card">
       <img src="./img/${doc.id}.jpeg" alt="Producto 1">
       <h1>${doc.data().nombredelproducto}</h1>
        <a href="#" class="btn-secondary">ver ahora</a>
     </div>`
  });
})
