  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-analytics.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyAf_p9_rxU6qGq9NtJCn-_y5q4jvycsL0c",
    authDomain: "prueba-29037.firebaseapp.com",
    projectId: "prueba-29037",
    storageBucket: "prueba-29037.firebasestorage.app",
    messagingSenderId: "42592777793",
    appId: "1:42592777793:web:0fd71a8cd47027df8778c0",
    measurementId: "G-2XDLMQ7KGP"
  };


  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);


  c
const productGrid = document.queryselector (".product-gri");
const cartCount = document.queryselector (".cart-count");
const carticon = document.querySelector (".cart-icon");
const cartModal = document.getElementBytal (".cart-modal");
const closeButton = document.guerySelector (".close-button");
const cartItemsContainer = document.getElementByTd("cart-itens");
const cartTotalAmount = document. getElementById ("cart-total-amount");
const botonEnviar = document.querySelector ("#enviar")