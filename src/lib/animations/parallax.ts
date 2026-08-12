let raf = 0;

export function initParallax() {

    const layers = document.querySelectorAll<HTMLElement>("[data-depth]");

    if (!layers.length) return;

    let mouseX = 0;
    let mouseY = 0;

    let currentX = 0;
    let currentY = 0;

    window.addEventListener("mousemove", (event) => {

        mouseX = (event.clientX / window.innerWidth - 0.5) * 2;

        mouseY = (event.clientY / window.innerHeight - 0.5) * 2;

    });

    const animate = () => {

        currentX += (mouseX - currentX) * 0.08;

        currentY += (mouseY - currentY) * 0.08;

        layers.forEach((layer) => {

            const depth = Number(layer.dataset.depth ?? 0);

            const x = currentX * depth * 60;

            const y = currentY * depth * 60;

            layer.style.transform = `translate3d(${x}px, ${y}px, 0)`;

        });

        raf = requestAnimationFrame(animate);

    };

    animate();

    window.addEventListener("beforeunload", () => {

        cancelAnimationFrame(raf);

    });

}