// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800, // Faster animations
    easing: 'ease-out',
    once: true,
    offset: 100
});

// Enhanced Mobile Navigation Toggle with better touch handling
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Enhanced smooth scrolling for navigation links with mobile offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Adjust offset for mobile
            const isMobile = window.innerWidth <= 768;
            const offsetTop = target.offsetTop - (isMobile ? 70 : 80);
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(255, 193, 7, 0.1)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const service = formData.get('service');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !phone || !service || !message) {
            showNotification('يرجى ملء جميع الحقول المطلوبة', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('يرجى إدخال بريد إلكتروني صحيح', 'error');
            return;
        }
        
        // Phone validation (simple)
        if (phone.length < 8) {
            showNotification('يرجى إدخال رقم هاتف صحيح', 'error');
            return;
        }
        
        // Simulate form submission
        showNotification('جاري إرسال الرسالة...', 'info');
        
        // Simulate API call
        setTimeout(() => {
            showNotification('تم إرسال الرسالة بنجاح! سنتواصل معك قريباً', 'success');
            contactForm.reset();
        }, 2000);
    });
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${getNotificationIcon(type)}"></i>
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 400px;
        direction: rtl;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

function getNotificationIcon(type) {
    switch(type) {
        case 'success': return 'fa-check-circle';
        case 'error': return 'fa-exclamation-circle';
        case 'warning': return 'fa-exclamation-triangle';
        default: return 'fa-info-circle';
    }
}

function getNotificationColor(type) {
    switch(type) {
        case 'success': return 'linear-gradient(45deg, #28a745, #20c997)';
        case 'error': return 'linear-gradient(45deg, #dc3545, #e74c3c)';
        case 'warning': return 'linear-gradient(45deg, #ffc107, #ff8c00)';
        default: return 'linear-gradient(45deg, #17a2b8, #20c997)';
    }
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Counter animation for statistics (if needed)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Typewriter effect for hero title
function initTypewriter() {
    const title = document.querySelector('.hero-title');
    if (!title) return;
    
    const text = title.textContent;
    title.textContent = '';
    title.style.width = 'auto'; // Allow natural width for multi-line
    title.style.overflow = 'hidden';
    title.style.whiteSpace = 'pre-line'; // Allow line breaks
    title.style.borderRight = '3px solid #ffc107';
    
    let i = 0;
    const typeSpeed = 100; // Speed in milliseconds
    
    function typeChar() {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(typeChar, typeSpeed);
        } else {
            // Hide cursor and keep title displayed
            title.style.overflow = 'visible';
            title.style.borderRight = 'none';
            title.style.animation = 'none';
            title.classList.add('completed');
        }
    }
    
    // Start typing after initial animation
    setTimeout(() => {
        typeChar();
    }, 1000);
}

// Initialize typewriter when page loads
document.addEventListener('DOMContentLoaded', () => {
    initTypewriter();
    
    // Initialize other functions
    const animateElements = document.querySelectorAll('.lawyer-card, .client-logo-card, .service-card');
    animateElements.forEach(el => observer.observe(el));
    
    // Initialize carousels
    const lawyersCarousel = new Carousel('lawyers', 'lawyersTrack', 'lawyersPrev', 'lawyersNext', 'lawyersIndicators', 4000);
    const clientsCarousel = new Carousel('clients', 'clientsTrack', 'clientsPrev', 'clientsNext', 'clientsIndicators', 3500);
    
    setActiveNavItem();
    
    // Add loading animation to cards
    const cards = document.querySelectorAll('.lawyer-card, .client-logo-card, .service-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});

// Add CSS for notification close button
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    .notification-content {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 20px;
        cursor: pointer;
        margin-right: auto;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .notification-close:hover {
        opacity: 0.7;
    }
    
    .animate-in {
        animation: slideInUp 0.6s ease forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(notificationStyles);

// Preloader (optional)
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// Add active class to current navigation item
function setActiveNavItem() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Add CSS for active navigation state
const activeNavStyles = document.createElement('style');
activeNavStyles.textContent = `
    .nav-link.active {
        color: #ffc107 !important;
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(activeNavStyles);

// Enhanced Carousel with touch support
class Carousel {
    constructor(containerId, trackId, prevBtnId, nextBtnId, indicatorsId, autoSlideInterval = 5000) {
        this.container = document.getElementById(containerId);
        this.track = document.getElementById(trackId);
        this.prevBtn = document.getElementById(prevBtnId);
        this.nextBtn = document.getElementById(nextBtnId);
        this.indicatorsContainer = document.getElementById(indicatorsId);
        this.autoSlideInterval = autoSlideInterval;
        
        this.currentSlide = 0;
        this.slides = this.track.children;
        this.totalSlides = this.slides.length;
        this.slidesPerView = this.getSlidesPerView();
        this.maxSlides = Math.max(0, this.totalSlides - this.slidesPerView);
        
        this.autoSlideTimer = null;
        this.isDragging = false;
        this.startPos = 0;
        this.currentTranslate = 0;
        this.prevTranslate = 0;
        
        this.init();
    }
    
    getSlidesPerView() {
        const containerWidth = this.container.offsetWidth;
        const slideWidth = this.slides[0].offsetWidth;
        const gap = 30; // gap between slides
        const padding = window.innerWidth <= 768 ? 100 : 120; // Less padding on mobile
        return Math.floor((containerWidth - padding) / (slideWidth + gap));
    }
    
    init() {
        this.createIndicators();
        this.bindEvents();
        this.updateNavigation();
        this.startAutoSlide();
        this.updateIndicators();
        this.addTouchSupport();
    }
    
    addTouchSupport() {
        // Touch events for mobile
        this.track.addEventListener('touchstart', (e) => this.touchStart(e));
        this.track.addEventListener('touchmove', (e) => this.touchMove(e));
        this.track.addEventListener('touchend', (e) => this.touchEnd(e));
        
        // Mouse events for desktop
        this.track.addEventListener('mousedown', (e) => this.touchStart(e));
        this.track.addEventListener('mousemove', (e) => this.touchMove(e));
        this.track.addEventListener('mouseup', (e) => this.touchEnd(e));
        this.track.addEventListener('mouseleave', (e) => this.touchEnd(e));
        
        // Prevent context menu on long press
        this.track.addEventListener('contextmenu', (e) => e.preventDefault());
    }
    
    touchStart(event) {
        this.isDragging = true;
        this.startPos = this.getPositionX(event);
        this.track.style.cursor = 'grabbing';
        this.track.style.userSelect = 'none';
        this.stopAutoSlide();
    }
    
    touchMove(event) {
        if (!this.isDragging) return;
        
        const currentPosition = this.getPositionX(event);
        const diff = currentPosition - this.startPos;
        const slideWidth = this.slides[0].offsetWidth;
        const gap = 30;
        
        // Limit drag distance
        const maxDrag = slideWidth + gap;
        const limitedDiff = Math.max(-maxDrag, Math.min(maxDrag, diff));
        
        this.currentTranslate = this.prevTranslate + limitedDiff;
        this.track.style.transform = `translateX(${this.currentTranslate}px)`;
    }
    
    touchEnd(event) {
        if (!this.isDragging) return;
        
        this.isDragging = false;
        this.track.style.cursor = 'grab';
        this.track.style.userSelect = '';
        
        const slideWidth = this.slides[0].offsetWidth;
        const gap = 30;
        const threshold = (slideWidth + gap) / 3;
        
        if (Math.abs(this.currentTranslate - this.prevTranslate) > threshold) {
            if (this.currentTranslate < this.prevTranslate) {
                this.next();
            } else {
                this.prev();
            }
        } else {
            // Snap back to current position
            this.updateTrack();
        }
        
        this.startAutoSlide();
    }
    
    getPositionX(event) {
        return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
    }
    
    createIndicators() {
        if (!this.indicatorsContainer) return;
        
        const totalIndicators = Math.ceil(this.totalSlides / this.slidesPerView);
        
        for (let i = 0; i < totalIndicators; i++) {
            const indicator = document.createElement('div');
            indicator.className = 'carousel-indicator';
            indicator.addEventListener('click', () => this.goToSlide(i * this.slidesPerView));
            this.indicatorsContainer.appendChild(indicator);
        }
    }
    
    bindEvents() {
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());
        
        // Pause auto-slide on hover (desktop only)
        if (window.innerWidth > 768) {
            this.container.addEventListener('mouseenter', () => this.stopAutoSlide());
            this.container.addEventListener('mouseleave', () => this.startAutoSlide());
        }
        
        // Handle window resize
        window.addEventListener('resize', () => {
            this.slidesPerView = this.getSlidesPerView();
            this.maxSlides = Math.max(0, this.totalSlides - this.slidesPerView);
            this.updateNavigation();
            this.updateTrack();
        });
    }
    
    goToSlide(slideIndex) {
        this.currentSlide = Math.max(0, Math.min(slideIndex, this.maxSlides));
        this.updateTrack();
        this.updateNavigation();
        this.updateIndicators();
        this.resetAutoSlide();
    }
    
    next() {
        if (this.currentSlide < this.maxSlides) {
            this.currentSlide++;
            this.updateTrack();
            this.updateNavigation();
            this.updateIndicators();
            this.resetAutoSlide();
        }
    }
    
    prev() {
        if (this.currentSlide > 0) {
            this.currentSlide--;
            this.updateTrack();
            this.updateNavigation();
            this.updateIndicators();
            this.resetAutoSlide();
        }
    }
    
    updateTrack() {
        const slideWidth = this.slides[0].offsetWidth;
        const gap = 30;
        const translateX = this.currentSlide * (slideWidth + gap);
        this.track.style.transform = `translateX(${translateX}px)`;
        this.prevTranslate = translateX;
        this.currentTranslate = translateX;
    }
    
    updateNavigation() {
        // Disable prev button when at the beginning
        this.prevBtn.disabled = this.currentSlide === 0;
        
        // Disable next button when at the end
        this.nextBtn.disabled = this.currentSlide >= this.maxSlides;
        
        // Update button opacity and cursor
        if (this.prevBtn.disabled) {
            this.prevBtn.style.opacity = '0.5';
            this.prevBtn.style.cursor = 'not-allowed';
        } else {
            this.prevBtn.style.opacity = '1';
            this.prevBtn.style.cursor = 'pointer';
        }
        
        if (this.nextBtn.disabled) {
            this.nextBtn.style.opacity = '0.5';
            this.nextBtn.style.cursor = 'not-allowed';
        } else {
            this.nextBtn.style.opacity = '1';
            this.nextBtn.style.cursor = 'pointer';
        }
    }
    
    updateIndicators() {
        if (!this.indicatorsContainer) return;
        
        const indicators = this.indicatorsContainer.children;
        const currentIndicator = Math.floor(this.currentSlide / this.slidesPerView);
        
        for (let i = 0; i < indicators.length; i++) {
            indicators[i].classList.toggle('active', i === currentIndicator);
        }
    }
    
    startAutoSlide() {
        if (this.autoSlideTimer) return;
        
        this.autoSlideTimer = setInterval(() => {
            // Only auto-slide if not at the end
            if (this.currentSlide < this.maxSlides) {
                this.next();
            } else {
                // Reset to beginning when reaching the end
                this.goToSlide(0);
            }
        }, this.autoSlideInterval);
    }
    
    stopAutoSlide() {
        if (this.autoSlideTimer) {
            clearInterval(this.autoSlideTimer);
            this.autoSlideTimer = null;
        }
    }
    
    resetAutoSlide() {
        this.stopAutoSlide();
        this.startAutoSlide();
    }
} 