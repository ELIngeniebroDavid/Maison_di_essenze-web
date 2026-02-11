document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. MENÚ DE HAMBURGUESA ---
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
            
            const icon = menuToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // --- 2. LÓGICA DE MODALES DE PRECIOS ---
    
    // Seleccionamos todos los botones que dicen "Ver Precio"
    const botonesAbrir = document.querySelectorAll('.btn-precio');
    const botonesCerrar = document.querySelectorAll('.cerrar-modal');

    // Asignar evento para ABRIR
    botonesAbrir.forEach(btn => {
        btn.addEventListener('click', () => {
            const modalId = btn.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'block';
                // Evita que el fondo se mueva al estar el modal abierto (opcional)
                document.body.style.overflow = 'hidden'; 
            }
        });
    });

    // Asignar evento para CERRAR con la "X"
    botonesCerrar.forEach(span => {
        span.addEventListener('click', () => {
            const modal = span.closest('.modal-precio');
            if (modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto'; // Devuelve el scroll
            }
        });
    });

    // Cerrar si hacen clic fuera del cuadrito blanco
    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal-precio')) {
            event.target.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    // --- LÓGICA MODO CLARO/OSCURO ---
const themeBtn = document.getElementById('theme-toggle');
const body = document.body;

// Revisar si ya había una preferencia guardada
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
    themeBtn.innerHTML = '<i class="fas fa-moon"></i>'; // Icono de luna si está en claro
}

themeBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    // Guardar la elección del usuario
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        themeBtn.innerHTML = '<i class="fas fa-moon"></i>'; // Cambia a luna
    } else {
        localStorage.setItem('theme', 'dark');
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>'; // Cambia a sol
    }
});
});