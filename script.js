document.body.classList.remove('no-js');
    const header=document.querySelector('#header');
    
    const lightSections=[...document.querySelectorAll('#about,#work,#credentials')];
    function updateHeaderTone(){const line=header.getBoundingClientRect().height/2;const light=lightSections.some(section=>{const r=section.getBoundingClientRect();return r.top<=line&&r.bottom>line});header.classList.toggle('over-light',light)}
    window.addEventListener('scroll',updateHeaderTone,{passive:true});window.addEventListener('resize',updateHeaderTone);updateHeaderTone();
const menu=document.querySelector('.menu-toggle');
    const nav=document.querySelector('#navLinks');
    window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>8),{passive:true});
    menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');menu.querySelector('span').textContent=open?'×':'☰'});
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');menu.querySelector('span').textContent='☰'}));
    document.querySelectorAll('.show-more').forEach(button=>button.addEventListener('click',()=>{const card=button.closest('.project');const expanded=card.classList.toggle('expanded');button.setAttribute('aria-expanded',String(expanded));button.textContent=expanded?'Show less':'Show more'}));
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.08});
    document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
