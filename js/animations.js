// ==========================================
// SURAJ KORA PORTFOLIO
// ADVANCED ANIMATIONS
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

initRevealAnimations();
initParticles();
initParallax();
initTiltCards();
initCursorGlow();

});

// ==========================================
// SCROLL REVEAL
// ==========================================

function initRevealAnimations(){

const revealElements = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right, .reveal-scale"
);

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("active");

            }

        });

    },

    {
        threshold:0.15
    }

);

revealElements.forEach(element => {

    observer.observe(element);

});

}

// ==========================================
// PARTICLE SYSTEM
// ==========================================

function initParticles(){

const container =
document.getElementById("particles");

if(!container) return;

const canvas =
document.createElement("canvas");

container.appendChild(canvas);

const ctx =
canvas.getContext("2d");

let particles = [];

function resize(){

    canvas.width =
    window.innerWidth;

    canvas.height =
    window.innerHeight;

}

resize();

window.addEventListener(
    "resize",
    resize
);

class Particle{

    constructor(){

        this.x =
        Math.random() * canvas.width;

        this.y =
        Math.random() * canvas.height;

        this.size =
        Math.random() * 2 + 1;

        this.speedX =
        (Math.random() - 0.5) * 0.4;

        this.speedY =
        (Math.random() - 0.5) * 0.4;
    }

    update(){

        this.x += this.speedX;
        this.y += this.speedY;

        if(this.x > canvas.width)
        this.x = 0;

        if(this.x < 0)
        this.x = canvas.width;

        if(this.y > canvas.height)
        this.y = 0;

        if(this.y < 0)
        this.y = canvas.height;

    }

    draw(){

        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.size,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
        "rgba(0,245,255,.5)";

        ctx.fill();

    }

}

for(let i = 0; i < 80; i++){

    particles.push(
        new Particle()
    );

}

function connectParticles(){

    for(let a = 0; a < particles.length; a++){

        for(let b = a; b < particles.length; b++){

            const dx =
            particles[a].x -
            particles[b].x;

            const dy =
            particles[a].y -
            particles[b].y;

            const distance =
            dx * dx + dy * dy;

            if(distance < 12000){

                ctx.beginPath();

                ctx.strokeStyle =
                "rgba(0,245,255,.08)";

                ctx.lineWidth = 1;

                ctx.moveTo(
                    particles[a].x,
                    particles[a].y
                );

                ctx.lineTo(
                    particles[b].x,
                    particles[b].y
                );

                ctx.stroke();

            }

        }

    }

}

function animate(){

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    particles.forEach(particle => {

        particle.update();
        particle.draw();

    });

    connectParticles();

    requestAnimationFrame(
        animate
    );

}

animate();

}

// ==========================================
// PARALLAX EFFECT
// ==========================================

function initParallax(){

const shapes =
document.querySelectorAll(
    ".floating-shape"
);

if(!shapes.length) return;

document.addEventListener(
    "mousemove",
    (e) => {

        const x =
        e.clientX /
        window.innerWidth;

        const y =
        e.clientY /
        window.innerHeight;

        shapes.forEach(
            (shape,index) => {

            const speed =
            (index + 1) * 15;

            shape.style.transform =

            `translate(
                ${x * speed}px,
                ${y * speed}px
            )`;

        });

    }
);

}

// ==========================================
// 3D CARD TILT
// ==========================================

function initTiltCards(){

const cards =
document.querySelectorAll(
    ".glass"
);

cards.forEach(card => {

    card.addEventListener(
        "mousemove",
        (e) => {

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        const centerX =
        rect.width / 2;

        const centerY =
        rect.height / 2;

        const rotateX =
        (y - centerY) / 15;

        const rotateY =
        (centerX - x) / 15;

        card.style.transform =

        `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-5px)
        `;

    });

    card.addEventListener(
        "mouseleave",
        () => {

        card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0)";

    });

});

}

// ==========================================
// CURSOR GLOW
// ==========================================

function initCursorGlow(){

const glow =
document.createElement("div");

glow.classList.add(
    "cursor-glow"
);

document.body.appendChild(
    glow
);

Object.assign(
    glow.style,
    {
        position:"fixed",
        width:"200px",
        height:"200px",
        borderRadius:"50%",
        pointerEvents:"none",
        background:
        "radial-gradient(circle, rgba(0,245,255,.15), transparent 70%)",
        transform:"translate(-50%, -50%)",
        zIndex:"-1",
        filter:"blur(25px)"
    }
);

document.addEventListener(
    "mousemove",
    (e) => {

        glow.style.left =
        e.clientX + "px";

        glow.style.top =
        e.clientY + "px";

    }
);

}

// ==========================================
// FLOATING EFFECT
// ==========================================

window.addEventListener(
"scroll",
() => {

const scrolled =
window.pageYOffset;

document
.querySelectorAll(".parallax")
.forEach(element => {

    element.style.transform =

    `translateY(
    ${scrolled * 0.15}px
    )`;

});

});

// ==========================================
// PERFORMANCE
// ==========================================

window.addEventListener(
"blur",
() => {

    document.body.classList.add(
        "paused"
    );

});

window.addEventListener(
"focus",
() => {

    document.body.classList.remove(
        "paused"
    );

});

// ==========================================
// END
// ==========================================