/*document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.surfaces-slider');
    const leftArrow = document.querySelector('.arrow.left');
    const rightArrow = document.querySelector('.arrow.right');

    const scrollAmount = 368; // Cantidad de píxeles que se moverá el slider por cada clic

    // Para escritorio (totalItems = 4)
    const totalDesktopItems = 4;
    let currentDesktopItem = 1;

    // Para móvil (totalItems = 6)
    const totalMobileItems = 6;
    let currentMobileItem = 1;

    // Función para detectar si es un móvil
    const isMobile = window.innerWidth < 768; // Ajusta este valor si es necesario

    // Función para retroceder en móviles
    function retrocederMobileItem() {
        if (currentMobileItem > 1) {
            currentMobileItem--; // Retroceder al elemento anterior
        }
        slider.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    }

    // Mover hacia la izquierda
    leftArrow.addEventListener('click', () => {
        if (isMobile) {
            retrocederMobileItem(); // Retroceder en móviles
        } else {
            if (currentDesktopItem > 1) {
                currentDesktopItem--; // Retroceder en escritorio
            }
            slider.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        }
    });

    // Mover hacia la derecha
    rightArrow.addEventListener('click', () => {
        if (isMobile) {
            if (currentMobileItem < totalMobileItems) {
                currentMobileItem++; // Avanzar al siguiente elemento en móviles
                slider.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            } else {
                currentMobileItem = 1; // Reiniciar al primer elemento en móviles
                slider.scrollTo({
                    left: 0,
                    behavior: 'smooth'
                });
            }
        } else {
            if (currentDesktopItem < totalDesktopItems) {
                currentDesktopItem++; // Avanzar al siguiente elemento en escritorio
                slider.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            } else {
                currentDesktopItem = 1; // Reiniciar al primer elemento en escritorio
                slider.scrollTo({
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    });

    // Detectar si la ventana cambia de tamaño (por si el usuario redimensiona)
    window.addEventListener('resize', () => {
        if (window.innerWidth < 768) {
            isMobile = true;
        } else {
            isMobile = false;
        }
    });
});


*/
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.surfaces-slider');
    const leftArrow = document.querySelector('.arrow.left');
    const rightArrow = document.querySelector('.arrow.right');
    const scrollAmount = 368;

    const totalDesktopItems = 4, totalMobileItems = 6;
    let currentDesktopItem = 1, currentMobileItem = 1;
    
    const isMobile = () => window.innerWidth < 768;
    
    const scrollSlider = (direction) => {
        const currentItem = isMobile() ? currentMobileItem : currentDesktopItem;
        const totalItems = isMobile() ? totalMobileItems : totalDesktopItems;
        
        if (direction === 'left') {
            if (currentItem > 1) {
                isMobile() ? currentMobileItem-- : currentDesktopItem--;
                slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            }
        } else {
            if (currentItem < totalItems) {
                isMobile() ? currentMobileItem++ : currentDesktopItem++;
                slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            } else {
                isMobile() ? currentMobileItem = 1 : currentDesktopItem = 1;
                slider.scrollTo({ left: 0, behavior: 'smooth' });
            }
        }
    };

    leftArrow.addEventListener('click', () => scrollSlider('left'));
    rightArrow.addEventListener('click', () => scrollSlider('right'));

    window.addEventListener('resize', isMobile);
});
