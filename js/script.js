document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinksList = document.querySelector('.nav-links');
    const closeMenu = () => {
        navLinksList.classList.remove('is-open');
        menuToggle.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
    };

    if (menuToggle && navLinksList) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = navLinksList.classList.toggle('is-open');
            menuToggle.classList.toggle('is-open', isOpen);
            menuToggle.setAttribute('aria-expanded', String(isOpen));
        });

        navLinksList.querySelectorAll('a, .btn').forEach(link => {
            link.addEventListener('click', () => {
                closeMenu();
            });
        });

        document.addEventListener('click', (e) => {
            if (!navLinksList.classList.contains('is-open')) return;
            const target = e.target;
            if (menuToggle.contains(target) || navLinksList.contains(target)) return;
            closeMenu();
        });
    }

    // 1. Плавный скролл для навигации
    const navLinks = document.querySelectorAll('.nav-links a, .btn');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 2. Эффект смены хедера при скролле
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. Анимация появления элементов (Intersection Observer)
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // чтобы анимация была единожды
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        threshold: 0.15
    });

    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });

    // 4. Обработка формы (имитация)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.textContent;

            btn.textContent = 'Отправка...';
            btn.style.opacity = '0.7';
            btn.disabled = true;

            // Имитация задержки сети
            setTimeout(() => {
                alert('Спасибо! Ваша заявка принята. Мы свяжемся с вами в течение 30 минут.');
                contactForm.reset();
                btn.textContent = originalText;
                btn.style.opacity = '1';
                btn.disabled = false;
            }, 1500);
        });
    }

    // 5. Параллакс эффект для Hero (легкое движение фона)
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        if (!hero) return;
        const scrollValue = window.scrollY;
        hero.style.backgroundPositionY = `${scrollValue * 0.35}px`;
    });
});
