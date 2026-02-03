// Random fog siren
setTimeout(() => {
    if(Math.random() > 0.7) {
        alert('⚠️ AIR RAID SIREN ⚠️\n\nThe Otherworld transition is beginning...\n\n(jk its just a popup lol)');
    }
}, 30000);

// Cursor trail effect (because why not)
document.addEventListener('mousemove', function(e) {
    if(Math.random() > 0.95) {
        const skull = document.createElement('span');
        skull.innerHTML = '💀';
        skull.style.position = 'fixed';
        skull.style.left = e.clientX + 'px';
        skull.style.top = e.clientY + 'px';
        skull.style.pointerEvents = 'none';
        skull.style.opacity = '0.5';
        skull.style.fontSize = '12px';
        skull.style.zIndex = '9999';
        document.body.appendChild(skull);
        setTimeout(() => skull.remove(), 1000);
    }
});

// Console easter eggs
console.log('%c⛧ THE ORDER SEES ALL ⛧', 'color: red; font-size: 20px; font-weight: bold;');
console.log('%cYou found the developer console! +10 Forbidden Lore Points', 'color: orange;');
console.log('%cAh, a fellow seeker of forbidden knowledge... or just a web developer', 'color: #ffcc00;');
console.log('%cBut seriously dont try to summon any demons', 'color: gray; font-style: italic;');
console.log('%cIf you see this message in 2010 or later: the Otherworld has leaked into your timeline', 'color: #ff6600;');
console.log('%cprotip: the real treasure was the occult knowledge we learned along the way', 'color: #00ff00;');
console.log('%c- DarkAlessa1999 (Todd)', 'color: #cc0000; font-style: italic;');
