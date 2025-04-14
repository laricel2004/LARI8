// Contagem regressiva para a próxima Festa do Divino
document.addEventListener('DOMContentLoaded', function() {
    // Próxima Festa do Divino (50 dias após a Páscoa)
    // Exemplo: Definindo para 20 de maio de 2024
    const nextFestivalDate = new Date('2024-05-20T00:00:00');
    
    function updateCountdown() {
        const now = new Date();
        const diff = nextFestivalDate - now;
        
        if (diff <= 0) {
            // Se a data já passou, definir para o próximo ano
            nextFestivalDate.setFullYear(nextFestivalDate.getFullYear() + 1);
            return updateCountdown();
        }
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
    
    // Atualizar a cada segundo
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Atualizar ano no footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Botão voltar ao topo
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Modal
    const ctaButton = document.getElementById('cta-button');
    const eventModal = new bootstrap.Modal(document.getElementById('eventModal'));
    
    ctaButton.addEventListener('click', function() {
        eventModal.show();
    });
    
    // Preloader
    window.addEventListener('load', function() {
        setTimeout(function() {
            document.querySelector('.preloader').style.opacity = '0';
            document.querySelector('.preloader').style.visibility = 'hidden';
        }, 1000);
    });
    
    // Animação de scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate__animated');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate__fadeInUp');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Executar uma vez ao carregar a página
});