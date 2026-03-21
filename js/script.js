/**
 * Proposal Website - Interactive flow
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  const screens = {
    intro: document.getElementById('intro'),
    story: document.getElementById('story'),
    secretQuestion: document.getElementById('secret-question'),
    secretWrong: document.getElementById('secret-wrong'),
    secretPhotos: document.getElementById('secret-photos'),
    letter: document.getElementById('letter'),
    question: document.getElementById('question'),
    yesScreen: document.getElementById('yes-screen'),
    noScreen: document.getElementById('no-screen'),
  };

  const btnBegin = document.getElementById('btn-begin');
  const btnSecret = document.getElementById('btn-secret');
  const btnCheckAnswer = document.getElementById('btn-check-answer');
  const btnToLetter = document.getElementById('btn-to-letter');
  const btnAfterPhotos = document.getElementById('btn-after-photos');
  const btnContinue = document.getElementById('btn-continue');
  const secretAnswer = document.getElementById('secret-answer');
  const btnYes = document.getElementById('btn-yes');
  const btnNo = document.getElementById('btn-no');
  const btnTryAgain = document.getElementById('btn-try-again');

  function showScreen(screen) {
    Object.values(screens).forEach((s) => s.classList.add('hidden'));
    screen.classList.remove('hidden');
  }

  function moveButton(btn) {
    const rect = btn.getBoundingClientRect();
    const maxX = window.innerWidth - rect.width - 40;
    const maxY = window.innerHeight - rect.height - 40;

    const newX = Math.max(20, Math.min(maxX, Math.random() * maxX));
    const newY = Math.max(20, Math.min(maxY, Math.random() * maxY));

    btn.style.position = 'fixed';
    btn.style.left = newX + 'px';
    btn.style.top = newY + 'px';
  }

  function fireConfetti() {
    if (typeof confetti !== 'function') return;
    const colors = ['#e8a4b8', '#c97b8c', '#f5d6dc', '#e8c9a0', '#d495a8', '#fdf2f4'];

    confetti({
      particleCount: 250,
      spread: 360,
      origin: { x: 0.5, y: 0.5 },
      colors: colors,
      scalar: 1.4,
      startVelocity: 60,
    });

    confetti({
      particleCount: 100,
      spread: 180,
      origin: { x: 0.5, y: 0.8 },
      colors: colors,
      scalar: 1.2,
      startVelocity: 45,
      angle: 270,
    });

    const duration = 6000;
    const end = Date.now() + duration;
    let lastFire = 0;

    (function frame() {
      const now = Date.now();
      if (now - lastFire > 100 && now < end) {
        lastFire = now;
        confetti({
          particleCount: 12,
          angle: 60,
          spread: 80,
          origin: { x: 0 },
          colors: colors,
          scalar: 1.3,
        });
        confetti({
          particleCount: 12,
          angle: 120,
          spread: 80,
          origin: { x: 1 },
          colors: colors,
          scalar: 1.3,
        });
      }
      if (now < end) requestAnimationFrame(frame);
    })();
  }

  function spawnHearts() {
    const container = document.getElementById('hearts-container');
    if (!container) return;
    const hearts = ['♥', '❤', '💕', '💗'];
    for (let i = 0; i < 80; i++) {
      const heart = document.createElement('span');
      heart.className = 'floating-heart';
      heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
      heart.style.left = Math.random() * 100 + '%';
      heart.style.animationDelay = Math.random() * 3 + 's';
      heart.style.animationDuration = 3 + Math.random() * 2 + 's';
      container.appendChild(heart);
      setTimeout(function () {
        heart.remove();
      }, 8000);
    }
  }

  const bgMusic = document.getElementById('bg-music');
  const musicToggle = document.getElementById('music-toggle');

  function playMusic() {
    if (bgMusic && !bgMusic.muted) {
      bgMusic.play().catch(function () {});
    }
  }

  if (musicToggle && bgMusic) {
    musicToggle.addEventListener('click', function () {
      if (bgMusic.paused) {
        bgMusic.play().catch(function () {});
        musicToggle.classList.remove('muted');
      } else {
        bgMusic.pause();
        musicToggle.classList.add('muted');
      }
    });
  }

  btnBegin.addEventListener('click', function () {
    showScreen(screens.story);
    playMusic();
    setTimeout(initPhotoFadeIn, 100);
  });

  btnSecret.addEventListener('click', function () {
    showScreen(screens.secretQuestion);
  });

  btnCheckAnswer.addEventListener('click', function () {
    const answer = (secretAnswer.value || '').trim().toLowerCase();
    if (answer === 'blue') {
      showScreen(screens.secretPhotos);
    } else {
      showScreen(screens.secretWrong);
    }
  });

  secretAnswer.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      btnCheckAnswer.click();
    }
  });

  btnToLetter.addEventListener('click', function () {
    showScreen(screens.letter);
  });

  if (btnAfterPhotos) {
    btnAfterPhotos.addEventListener('click', function () {
      showScreen(screens.letter);
    });
  }

  if (btnContinue) {
    btnContinue.addEventListener('click', function () {
      showScreen(screens.question);
    });
  }
  btnYes.addEventListener('click', function () {
    showScreen(screens.yesScreen);
    fireConfetti();
    spawnHearts();
    var yesVideo = document.getElementById('yes-video');
    if (yesVideo) {
      yesVideo.play().catch(function () {});
    }
  });

  btnNo.addEventListener('click', function () {
    showScreen(screens.noScreen);
  });

  btnNo.addEventListener('mouseenter', function () {
    moveButton(btnNo);
  });

  btnTryAgain.addEventListener('click', function () {
    btnNo.style.position = '';
    btnNo.style.left = '';
    btnNo.style.top = '';
    showScreen(screens.question);
  });

  function initFloatingHearts() {
    const container = document.getElementById('floating-hearts-bg');
    if (!container) return;
    const hearts = ['♥', '❤', '💕', '💗'];
    for (let i = 0; i < 24; i++) {
      const heart = document.createElement('span');
      heart.className = 'bg-heart';
      heart.textContent = hearts[i % hearts.length];
      heart.style.left = Math.random() * 100 + '%';
      heart.style.animationDelay = Math.random() * 8 + 's';
      heart.style.animationDuration = 8 + Math.random() * 6 + 's';
      container.appendChild(heart);
    }
  }

  function initStarrySky() {
    const sky = document.getElementById('starry-sky');
    if (!sky) return;
    for (let i = 0; i < 150; i++) {
      const star = document.createElement('div');
      star.className = 'star' + (Math.random() > 0.9 ? ' star-large' : '');
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.width = star.style.height = (1 + Math.random() * 2.5) + 'px';
      star.style.animationDelay = Math.random() * 3 + 's';
      star.style.animationDuration = (1.5 + Math.random() * 2.5) + 's';
      sky.appendChild(star);
    }
  }

  function initHeartTrail() {
    const container = document.getElementById('heart-trail');
    if (!container) return;
    const hearts = ['♥', '❤', '💕', '💗'];
    let lastTime = 0;
    const throttle = 80;

    document.addEventListener('mousemove', function (e) {
      const now = Date.now();
      if (now - lastTime < throttle) return;
      lastTime = now;

      const heart = document.createElement('span');
      heart.className = 'trail-heart';
      heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
      heart.style.left = e.clientX + 'px';
      heart.style.top = e.clientY + 'px';
      container.appendChild(heart);
      setTimeout(function () {
        heart.remove();
      }, 1000);
    });
  }

  function initPhotoFadeIn() {
    const storyScreen = document.getElementById('story');
    const items = document.querySelectorAll('.timeline-item');
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('timeline-visible');
          }
        });
      },
      { threshold: 0.15, root: storyScreen || null, rootMargin: '0px' }
    );
    items.forEach(function (item) {
      item.classList.add('timeline-fade');
      observer.observe(item);
    });
  }

  initFloatingHearts();
  initStarrySky();
  initHeartTrail();
});
