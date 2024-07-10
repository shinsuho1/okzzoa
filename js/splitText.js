function splitText(element){
    let c = [],
        e = document.querySelector(element),
        t = e.textContent.trim();
    for(let i = 0; i <= (t.length -1) ; i++){
        if(t[i] != undefined){
            c.push(t[i]);
        }
    }
    e.textContent = "";
    c.forEach(function(el,index){
        e.innerHTML += `<span class="spt">${el}</span>`;
    });
};

/* ======== MAIN ======== */
// splitText(".splitText");
// splitText(".s02 strong.splitText");
// splitText(".s02 span.splitText");
// splitText(".s03 p.splitText");
// splitText(".s05 p.splitText");
// splitText(".s06 p.splitText");
