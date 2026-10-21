const containers = document.querySelectorAll(
    'header, .services .block, .services_items, .team .block, .team_items'
);

if ('IntersectionObserver' in window) {

    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                const container = entry.target;
                const items = container.querySelectorAll('.reveal');

                items.forEach((el) => {
                    const animation = el.dataset.animate || 'animate__fadeInUp';
                    const delay = el.dataset.delay || '0s';

                    el.style.animationDelay = delay;
                    el.classList.add('animate__animated', animation);

                    el.addEventListener('animationend', function handler(e) {
                        if (e.target !== el) return;
                        el.removeEventListener('animationend', handler);
                        el.classList.remove('reveal');
                        el.style.animationDelay = '';
                    });
                });

                obs.unobserve(container);
            });
        },
        {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        }
    );

    containers.forEach((c) => observer.observe(c));

} else {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.remove('reveal'));
}