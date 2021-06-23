'Use Strict';
const pageTransition = function () {
  let tl = gsap.timeline();

  // Transition to show the block
  tl.to('ul.transition li', {
    duration: 0.5,
    scaleY: 1,
    transformOrigin: 'bottom left',
    stagger: 0.2,
  });

  // hide the block

  tl.to('ul.transition li', {
    duration: 0.5,
    scaleY: 0,
    transformOrigin: 'bottom left',
    stagger: 0.1,
    delay: 0.1,
  });
};

const contentAnimation = function () {
  let tl = gsap.timeline();

  tl.from('.left', {
    duration: 1.5,
    translateY: 50,
    opacity: 0,
  });

  tl.to(
    'img',
    {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
    },
    '-=1.2'
  );
};

const delay = function (n) {
  n = n || 2000;
  return new Promise(done => {
    setTimeout(() => {
      done();
    }, n);
  });
};

//init barba
barba.init({
  sync: true,
  transitions: [
    {
      async leave(data) {
        const done = this.async();

        pageTransition();
        await delay(1500);
        done();
      },

      async enter(data) {
        contentAnimation();
      },

      async once(data) {
        contentAnimation();
      },
    },
  ],
});
