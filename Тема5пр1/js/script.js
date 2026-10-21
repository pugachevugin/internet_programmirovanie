const items = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {

    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                const el = entry.target;
                const animation = el.dataset.animate || 'animate__fadeInUp';
                const delay = el.dataset.delay || '0s';

                el.style.animationDelay = delay;
                el.classList.add('animate__animated', animation);

                obs.unobserve(el);

                el.addEventListener('animationend', function handler(e) {
                    if (e.target !== el) return;
                    el.removeEventListener('animationend', handler);
                    el.classList.remove('reveal', 'animate__animated', animation);
                    el.style.animationDelay = '';
                });
            });
        },
        {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        }
    );

    items.forEach((el) => observer.observe(el));

} else {
    items.forEach((el) => el.classList.remove('reveal'));
}

// ТАЙМЕР
function tic() {
    const now = new Date();
    
    const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    
    let diff = endOfDay - now;

    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);
    
    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * (1000 * 60);
    
    const seconds = Math.floor(diff / 1000);

    const h = String(hours).padStart(2, '0');
    const m = String(minutes).padStart(2, '0');
    const s = String(seconds).padStart(2, '0');

    const timerElement = document.querySelector('#countdown');
    
    if (timerElement) {
        timerElement.textContent = `${h}: ${m}: ${s}`;
    }
}

setInterval(tic, 1000);

tic();