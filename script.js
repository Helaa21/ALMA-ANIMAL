// ===================================================================================
//
//  ¡HOLA, PROPIETARIO! AQUÍ ES DONDE AÑADES Y EDITAS LAS NOTICIAS DEL BLOG.
//
//  Instrucciones:
//  1. Para añadir una nueva noticia, copia todo el bloque desde `{` hasta `},`.
//  2. Pégalo al principio de la lista (después del `[`).
//  3. Modifica los valores: title, date, imageUrl, y el contentHTML.
//  4. ¡Guarda el archivo y sube los cambios a GitHub! La página se actualizará sola.
//
// ===================================================================================

const newsData = [
  {
    title: "El abandono de mascotas en Lima",
    date: "1 de Agosto, 2025",
    imageUrl: "https://images.unsplash.com/photo-1599849577838-938f13016593?q=80&w=2070&auto=format&fit=crop",
    // Usa ` (acento grave) para escribir HTML en varias líneas.
    contentHTML: `
      <p class="text-gray-700 leading-relaxed mb-6">En Lima, miles de perros y gatos viven en las calles, expuestos al hambre, enfermedades y violencia. Como ciudadanos, podemos marcar la diferencia si tomamos medidas responsables.</p>
      <ul class="list-disc list-inside text-gray-700 space-y-3 mb-8 pl-4">
          <li><strong>Esteriliza a tus mascotas:</strong> Es la forma más efectiva de prevenir camadas no deseadas y reducir el número de animales sin hogar.</li>
          <li><strong>Adopta con responsabilidad:</strong> Antes de adoptar, asegúrate de poder ofrecerle un hogar seguro, amor y los cuidados que necesita para toda su vida.</li>
          <li><strong>Informa y educa:</strong> Habla con tu familia y amigos sobre la importancia de la tenencia responsable.</li>
          <li><strong>Denuncia el abandono:</strong> El abandono es un acto de crueldad y está penado por la ley. Si eres testigo, no dudes en denunciar.</li>
          <li><strong>Apoya campañas y refugios:</strong> Puedes ayudar como voluntario, donando alimentos o difundiendo sus casos en redes sociales.</li>
      </ul>
    `,
    sources: [
      { url: "https://elcomercio.pe/wuf/por-que-peru-es-uno-de-los-paises-con-mas-perros-y-gatos-en-estado-de-abandono-noticia/", text: "WUF / El Comercio" },
      { url: "https://www.infobae.com/peru/2025/05/14/los-efectos-secundarios-de-adoptar-jornada-benefica-de-adopciones-en-lima", text: "Infobae Perú" }
    ]
  },
  {
    
    sources: [] // Puedes dejar esta lista vacía si no hay fuentes
  }
];


// ===================================================================================
//
//  A PARTIR DE AQUÍ ESTÁ LA LÓGICA DE LA PÁGINA.
//  NO ES NECESARIO QUE MODIFIQUES NADA DE LO QUE SIGUE.
//
// ===================================================================================

// --- FUNCIÓN PARA GENERAR EL FEED DE NOTICIAS ---
function renderNewsFeed() {
  const container = document.getElementById('news-feed-container');
  if (!container) return;

  // Si no hay noticias, muestra un mensaje
  if (newsData.length === 0) {
    container.innerHTML = `<p class="text-center text-gray-500">Aún no hay noticias publicadas. ¡Vuelve pronto!</p>`;
    return;
  }

  // Genera el HTML para cada noticia
  const allNewsHTML = newsData.map(post => {
    // Genera la lista de fuentes si existen
    const sourcesHTML = post.sources && post.sources.length > 0 
      ? `
        <div class="border-t pt-4 mt-6">
            <h4 class="font-poppins font-semibold text-cyan-800 mb-2">Fuentes:</h4>
            <ul class="list-disc list-inside text-sm text-gray-600 space-y-2">
                ${post.sources.map(source => `<li><a href="${source.url}" target="_blank" class="text-cyan-600 hover:underline">${source.text}</a></li>`).join('')}
            </ul>
        </div>
      `
      : ''; // Si no hay fuentes, no añade nada

    // Retorna la tarjeta completa de la noticia
    return `
      <div class="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <!-- Cabecera del Post -->
          <div class="p-4 flex items-center border-b">
              <div class="bg-cyan-100 p-2 rounded-full">
                 <svg class="w-8 h-8 text-cyan-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
              </div>
              <div class="ml-4">
                  <h3 class="font-poppins font-bold text-lg text-cyan-800">${post.title}</h3>
                  <p class="text-sm text-gray-500">${post.date}</p>
              </div>
          </div>
          
          <!-- Imagen del Post -->
          <img class="w-full h-80 object-cover" src="${post.imageUrl}" alt="Imagen de la noticia: ${post.title}">

          <!-- Contenido del Post -->
          <div class="p-6">
              ${post.contentHTML}
              ${sourcesHTML}
          </div>
      </div>
    `;
  }).join('');

  container.innerHTML = allNewsHTML;
}


// --- Importaciones de Firebase (código original) ---
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInAnonymously, signInWithCustomToken } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, doc, setDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-storage.js";

// --- El resto de tu código JavaScript (autenticación, mapa, etc.) va aquí ---
// He copiado todo tu código original debajo.

// --- CONFIGURACIÓN DE FIREBASE ---
const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : { apiKey: "...", authDomain: "...", projectId: "...", storageBucket: "...", messagingSenderId: "...", appId: "..." };
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// --- VARIABLES GLOBALES Y SELECTORES ---
let map;
let tempMarker;
let currentReportType = '';
const sections = document.querySelectorAll('.page-section');
const navLinks = document.querySelectorAll('.nav-link');
const authModal = document.getElementById('auth-modal');
const reportModal = document.getElementById('report-modal');
const addPetModal = document.getElementById('add-pet-modal');

// --- LÓGICA DE NAVEGACIÓN ---
function showSection(id) {
    sections.forEach(section => { section.style.display = 'none'; });
    const activeSection = document.getElementById(id);
    if (activeSection) {
        activeSection.style.display = 'block';
    }
    
    if (id === 'mapeo-mascotas') {
        if (!map) initMap(); else setTimeout(() => map.invalidateSize(), 100);
    }
    if (id === 'formando-familias') {
        loadPetsForAdoption();
    }
    if (id === 'blog-noticias') {
        renderNewsFeed(); // Llama a la función para crear el blog
    }
}
navLinks.forEach(link => {
    link.addEventListener('click', (e) => { e.preventDefault(); showSection(link.getAttribute('href').substring(1)); });
});
document.querySelector('a[href="#"]').addEventListener('click', (e) => { e.preventDefault(); showSection('home-section'); });

// ... (El resto de tu código de autenticación, mapa, modales, etc. va aquí sin cambios)
// ... (Asegúrate de copiarlo desde el código anterior que te di)

// Inicializar la aplicación
showSection('home-section');

