let tl = gsap.timeline({ Defaults: { Easing: Expo.EaseOut } });

tl.to('.hero-title', { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration:1, delay: 0.1 })
.to('.hero-description', { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration:1, delay: 0.1 }, "-=.7")
.to('.hero-img', { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration:1, delay: 0.1 }, "-=1.3")

.to('.number', { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', y: 0, stagger: .3, opacity: 1, duration: 1}, "-=1")











/* from('.hero', { scale: 0.6, duration: 2, opacity: 0, ease: Expo.easeOut, delay: 0.2 }) */