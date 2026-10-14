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
                    el.classList.remove('reveal');
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