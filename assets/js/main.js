/**
 * TEAMVENKY - Master JavaScript
 * Handles navigation, interactive before/after sliders, form validation & WhatsApp integration
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initBeforeAfterSliders();
  initConsultationForm();
  initFaqAccordions();
  initStatCounters();
});

/* ==========================================================================
   Mobile Navigation
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileNavToggle');
  const mobileMenu = document.getElementById('mobileNavMenu');
  const closeBtn = document.getElementById('mobileNavClose');

  if (!toggleBtn || !mobileMenu) return;

  function openMenu() {
    mobileMenu.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.add('hidden');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  // Close when clicking nav links
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/* ==========================================================================
   Interactive Before / After Image Sliders
   ========================================================================== */
function initBeforeAfterSliders() {
  const containers = document.querySelectorAll('.ba-container');

  containers.forEach(container => {
    const afterWrapper = container.querySelector('.ba-after-wrapper');
    const handle = container.querySelector('.ba-slider-handle');

    if (!afterWrapper || !handle) return;

    let isDragging = false;

    function updateSlider(clientX) {
      const rect = container.getBoundingClientRect();
      let offsetX = clientX - rect.left;
      let percentage = (offsetX / rect.width) * 100;

      if (percentage < 5) percentage = 5;
      if (percentage > 95) percentage = 95;

      afterWrapper.style.width = `${percentage}%`;
      handle.style.left = `${percentage}%`;
    }

    // Mouse events
    handle.addEventListener('mousedown', (e) => {
      e.preventDefault();
      isDragging = true;
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      updateSlider(e.clientX);
    });

    // Touch events for mobile
    handle.addEventListener('touchstart', (e) => {
      isDragging = true;
    }, { passive: true });

    window.addEventListener('touchend', () => {
      isDragging = false;
    });

    handle.addEventListener('touchmove', (e) => {
      if (!isDragging || !e.touches[0]) return;
      if (e.cancelable) e.preventDefault();
      updateSlider(e.touches[0].clientX);
    }, { passive: false });

    // Allow clicking anywhere on the container to move the slider
    container.addEventListener('click', (e) => {
      if (e.target.closest('.ba-slider-handle')) return;
      updateSlider(e.clientX);
    });
  });
}

/* ==========================================================================
   Consultation Assessment Form & WhatsApp Routing
   ========================================================================== */
function initConsultationForm() {
  const form = document.getElementById('consultationForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('[name="name"]')?.value.trim();
    const phone = form.querySelector('[name="phone"]')?.value.trim();
    const email = form.querySelector('[name="email"]')?.value.trim() || 'Not provided';
    const goal = form.querySelector('[name="goal"]')?.value || 'Body Transformation';
    const trainingType = form.querySelector('[name="trainingType"]')?.value || 'Online Coaching';
    const commitment = form.querySelector('[name="commitment"]')?.value || '4-5 Days/week';
    const medical = form.querySelector('[name="medical"]')?.value.trim() || 'None reported';
    const notes = form.querySelector('[name="notes"]')?.value.trim() || 'None';

    if (!name || !phone) {
      alert('Please fill in your name and WhatsApp phone number.');
      return;
    }

    // Build pre-filled WhatsApp message
    const message = `*TeamVenky Coaching Enquiry*\n\n` +
      `👤 *Name:* ${name}\n` +
      `📱 *Phone:* ${phone}\n` +
      `📧 *Email:* ${email}\n` +
      `🎯 *Fitness Goal:* ${goal}\n` +
      `🏋️ *Mode:* ${trainingType}\n` +
      `📅 *Commitment:* ${commitment}\n` +
      `⚠️ *Injuries/Conditions:* ${medical}\n` +
      `💬 *Expectations:* ${notes}\n\n` +
      `_Submitted from TeamVenky Website (Coimbatore, Tamil Nadu)_`;

    const encodedMsg = encodeURIComponent(message);
    const coachWhatsAppNumber = '919876543210'; // Client's official WhatsApp

    // Open WhatsApp in new tab
    const whatsappUrl = `https://wa.me/${coachWhatsAppNumber}?text=${encodedMsg}`;
    
    // Show instant visual confirmation
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '✓ Redirecting to WhatsApp...';
      submitBtn.classList.add('bg-green-600');
      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.classList.remove('bg-green-600');
      }, 3500);
    }

    window.open(whatsappUrl, '_blank');
  });
}

/* ==========================================================================
   FAQ Accordions
   ========================================================================== */
function initFaqAccordions() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');
    const icon = item.querySelector('.faq-icon');

    if (!trigger || !content) return;

    trigger.addEventListener('click', () => {
      const isOpen = !content.classList.contains('hidden');

      // Close all other faqs in the same group
      faqItems.forEach(other => {
        const otherContent = other.querySelector('.faq-content');
        const otherIcon = other.querySelector('.faq-icon');
        if (otherContent) otherContent.classList.add('hidden');
        if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
      });

      if (!isOpen) {
        content.classList.remove('hidden');
        if (icon) icon.style.transform = 'rotate(180deg)';
      }
    });
  });
}

/* ==========================================================================
   Animated Statistics Counters
   ========================================================================== */
function initStatCounters() {
  const counters = document.querySelectorAll('.stat-counter');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const targetVal = parseFloat(target.getAttribute('data-target'));
        const suffix = target.getAttribute('data-suffix') || '';
        let start = 0;
        const duration = 1500;
        const stepTime = 25;
        const steps = duration / stepTime;
        const increment = targetVal / steps;

        const timer = setInterval(() => {
          start += increment;
          if (start >= targetVal) {
            target.textContent = targetVal % 1 === 0 ? targetVal + suffix : targetVal.toFixed(1) + suffix;
            clearInterval(timer);
          } else {
            target.textContent = (targetVal % 1 === 0 ? Math.floor(start) : start.toFixed(1)) + suffix;
          }
        }, stepTime);

        obs.unobserve(target);
      }
    });
  }, { threshold: 0.4 });

  counters.forEach(counter => observer.observe(counter));
}
