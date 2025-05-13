'use strict'
//fade-in
const faders=document.querySelectorAll('.fade-in');
const appearOptions={
    root:null,
    threshold:0.2,
};
const appearonScroll=new IntersectionObserver(function(entries, appearonScroll){
    entries.forEach(entry =>{
        if (!entry.isIntersecting)return;
        else {
            entry.target.classList.add('appear');
            appearonScroll.unobserve(entry.target);
        };
        appearonScroll.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader =>{
    appearonScroll.observe(fader);
});
