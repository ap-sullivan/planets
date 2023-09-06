// mobile navigation

const btnNav = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNav.addEventListener('click', function() {
  headerEl.classList.toggle('nav-open')
  
})

const sectionHeroEl = document.querySelector(".hero")

const obs = new IntersectionObserver(function(entries){
const ent = entries[0];

if (ent.isIntersecting === false){
  document.body.classList.add('sticky')
}

if (ent.isIntersecting === true){
  document.body.classList.remove('sticky')
}

},

{
  // in the viewport
  root: null,
  threshhold: 0,
  rootMargin: '-80px' 

})
obs.observe(sectionHeroEl)

