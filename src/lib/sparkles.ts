export function triggerMagicSparkles(targetElement?: HTMLElement | null) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    const canvas = document.createElement("canvas");
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100vw";
    canvas.style.height = "100vh";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "999";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    if (!ctx) {
        canvas.remove();
        return;
    }

    const isMobile = window.innerWidth <= 768;
    const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.scale(dpr, dpr);

    let originX = window.innerWidth / 2;
    let originY = window.innerHeight / 2;

    if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        originX = rect.left + rect.width / 2;
        originY = rect.top + rect.height / 2;
    }

    const colors = [
        "#FFE5A3",
        "#F8C8DD",
        "#FFFDF8",
        "#E8D8FF",
        "#FAD0C4"
    ];

    interface Particle {
        x: number;
        y: number;
        vx: number;
        vy: number;
        size: number;
        color: string;
        alpha: number;
        decay: number;
        rotation: number;
        rotationSpeed: number;
        isStar: boolean;
    }

    const particles: Particle[] = [];
    const count = isMobile ? 22 : 38;

    for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 2.5 + Math.random() * 5.5;

        particles.push({
            x: originX,
            y: originY,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed - 1.5,
            size: 2.5 + Math.random() * 4,
            color: colors[Math.floor(Math.random() * colors.length)],
            alpha: 1,
            decay: 0.014 + Math.random() * 0.018,
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 0.15,
            isStar: Math.random() > 0.45
        });
    }

    function drawStar(c: CanvasRenderingContext2D, cx: number, cy: number, spikes: number, outerRadius: number, innerRadius: number) {
        let rot = (Math.PI / 2) * 3;
        let x = cx;
        let y = cy;
        const step = Math.PI / spikes;

        c.beginPath();
        c.moveTo(cx, cy - outerRadius);

        for (let i = 0; i < spikes; i++) {
            x = cx + Math.cos(rot) * outerRadius;
            y = cy + Math.sin(rot) * outerRadius;
            c.lineTo(x, y);
            rot += step;

            x = cx + Math.cos(rot) * innerRadius;
            y = cy + Math.sin(rot) * innerRadius;
            c.lineTo(x, y);
            rot += step;
        }

        c.lineTo(cx, cy - outerRadius);
        c.closePath();
        c.fill();
    }

    function render() {
        if (!ctx) return;
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

        let activeCount = 0;

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];

            if (p.alpha <= 0) continue;

            activeCount++;

            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.08;
            p.vx *= 0.98;
            p.rotation += p.rotationSpeed;
            p.alpha = Math.max(0, p.alpha - p.decay);

            ctx.save();
            ctx.globalAlpha = p.alpha;
            ctx.fillStyle = p.color;
            ctx.shadowBlur = 8;
            ctx.shadowColor = p.color;

            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation);

            if (p.isStar) {
                drawStar(ctx, 0, 0, 4, p.size * 1.4, p.size * 0.5);
            } else {
                ctx.beginPath();
                ctx.arc(0, 0, p.size, 0, Math.PI * 2);
                ctx.fill();
            }

            ctx.restore();
        }

        if (activeCount > 0) {
            requestAnimationFrame(render);
        } else {
            canvas.remove();
        }
    }

    requestAnimationFrame(render);
}
