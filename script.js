// تهيئة Swiper للسلايدر الرئيسي
const swiperGallery = new Swiper('#gallery .swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    keyboard: true,
    lazy: {
        loadPrevNext: true,
    },
});

// تفعيل الوضع الداكن
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', isDarkMode);
    darkModeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// تحميل إعدادات الوضع الداكن
if (localStorage.getItem('dark-mode') === 'true') {
    body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// تفعيل القائمة المتنقلة
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// تفعيل تأثيرات التمرير
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// تفعيل التحميل الكسول للصور
new LazyLoad({
    elements_selector: ".lazy",
    threshold: 0,
    callback_loaded: (el) => {
        el.style.opacity = '1';
        el.style.transform = 'scale(1)';
    }
});

// إضافة تأثيرات للأيقونات
document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'translateY(-10px)';
    });
    
    icon.addEventListener('mouseout', () => {
        icon.style.transform = 'translateY(0)';
    });
});

// إضافة زر "Scroll to Top"
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopButton.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// بيانات الأخبار (يمكن استبدالها ببيانات من API)
const newsData = [
    {
        title: "إطلاق مشروع المرصد البيئي",
        date: "15 أكتوبر 2023",
        content: "تم اليوم إطلاق المرصد البيئي الجديد لمتابعة التغيرات المناخية في المنطقة.",
        image: "news1.jpg"
    },
    {
        title: "ورشة عمل حول الذكاء الاصطناعي",
        date: "12 أكتوبر 2023",
        content: "ورشة عمل تفاعلية لتعليم أساسيات الذكاء الاصطناعي وتطبيقاته العملية.",
        image: "news2.jpg"
    },
    {
        title: "توقيع اتفاقية مع منظمة دولية",
        date: "10 أكتوبر 2023",
        content: "تم توقيع اتفاقية تعاون مع منظمة الأمم المتحدة لتعزيز الشفافية.",
        image: "news3.jpg"
    },
    {
        title: "مسابقة الابتكارات التقنية",
        date: "8 أكتوبر 2023",
        content: "انطلاق مسابقة الابتكارات التقنية لدعم المشاريع الشبابية المتميزة.",
        image: "news4.jpg"
    }
];

// إنشاء عناصر الأخبار ديناميكيًا
const newsWrapper = document.querySelector('.news-swiper .swiper-wrapper');

newsData.forEach(news => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide news-slide';
    slide.innerHTML = `
        <img src="${news.image}" alt="${news.title}">
        <h3>${news.title}</h3>
        <div class="date">${news.date}</div>
        <p>${news.content}</p>
    `;
    newsWrapper.appendChild(slide);
});

// تهيئة Swiper للأخبار
const newsSwiper = new Swiper('.news-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        }
    }
});

// بيانات ورش العمل (يمكن استبدالها ببيانات من API)
const workshopsData = [
    {
        title: "ورشة عمل الذكاء الاصطناعي",
        description: "تعلم أساسيات الذكاء الاصطناعي وتطبيقاته في الحياة اليومية.",
        image: "workshop1.jpg"
    },
    {
        title: "ورشة عمل تطوير الويب",
        description: "تعلم كيفية بناء مواقع ويب تفاعلية باستخدام HTML, CSS, وJavaScript.",
        image: "workshop2.jpg"
    },
    {
        title: "ورشة عمل التسويق الرقمي",
        description: "تعلم استراتيجيات التسويق الرقمي وكيفية استخدامها لتعزيز الأعمال.",
        image: "workshop3.jpg"
    }
];

// إنشاء عناصر ورش العمل ديناميكيًا
const workshopsWrapper = document.querySelector('#workshops .swiper-wrapper');

workshopsData.forEach(workshop => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    slide.innerHTML = `
        <img src="${workshop.image}" alt="${workshop.title}">
        <h3>${workshop.title}</h3>
        <p>${workshop.description}</p>
    `;
    workshopsWrapper.appendChild(slide);
});

// تهيئة Swiper لورش العمل
const workshopsSwiper = new Swiper('#workshops .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        }
    }
});