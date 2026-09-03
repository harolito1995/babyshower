import { gsap } from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

let lenisInstance: Lenis | null = null;

function initSmoothScroll() {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const isMobileOrTouch = window.innerWidth <= 768 || ("ontouchstart" in window && window.innerWidth < 1024);
    if (isMobileOrTouch) return;

    lenisInstance = new Lenis({
        duration: 1.15,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true
    });

    lenisInstance.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenisInstance?.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
}

export function initAnimations(){

    initSmoothScroll();

    initHero();

    requestAnimationFrame(()=>{

        initPrincess();

        initCountdown();

        initEvent();

        initDressCode();

        initGifts();

        initRSVP();

        initFooter();

    });

}

function initHero(){

    const title = document.querySelector<HTMLElement>(
        '[data-animate="hero-title"]'
    );

    if(!title) return;

    const split = new SplitType(title,{
        types:"words"
    });

    gsap.set(split.words,{
        opacity:0,
        y:70,
        filter:"blur(8px)"
    });

    gsap.set('[data-animate="hero-description"]',{
        opacity:0,
        y:20
    });

    gsap.set('[data-animate="hero-scroll"]',{
        opacity:0,
        y:15
    });

    const tl = gsap.timeline({

        defaults:{
            ease:"power3.out"
        }

    });

    tl.to(split.words,{

        opacity:1,
        y:0,
        filter:"blur(0px)",
        duration:.8,
        stagger:.07

    })

    .to('[data-animate="hero-description"]',{

        opacity:1,
        y:0,
        duration:.6

    },"-=.25")

    .to('[data-animate="hero-scroll"]',{

        opacity:1,
        y:0,
        duration:.45

    },"-=.15");

}

function initPrincess(){

    if(!document.querySelector("#princess")) return;

    const tl = gsap.timeline({

        scrollTrigger:{
            trigger:"#princess",
            start:"top 70%",
            once:true

        }

    });

    tl.from('#princess [data-badge]',{

        opacity:0,
        y:25,
        duration:.5

    })

    .from('#princess [data-intro]',{

        opacity:0,
        y:40,
        filter:"blur(8px)",
        duration:.6

    },"-=.2")

    .from('#princess [data-name]',{

        opacity:0,
        y:80,
        scale:.9,
        filter:"blur(12px)",
        duration:1,
        ease:"power3.out"

    },"-=.1")

    .from('#princess [data-outro]',{

        opacity:0,
        y:30,
        duration:.5

    },"-=.4");

}

function initCountdown(){

    if(!document.querySelector("#countdown")) return;

    gsap.timeline({

        scrollTrigger:{
            trigger:"#countdown",
            start:"top 70%",
            once:true

        }

    })

    .from('#countdown h2',{

        opacity:0,
        y:40,
        duration:.6

    })

    .from('#countdown p',{

        opacity:0,
        y:20,
        duration:.5

    },"-=.3")

    .from('#countdown [data-card]',{

        opacity:0,
        y:50,
        stagger:.12,
        duration:.6,
        ease:"power3.out"

    },"-=.2");

}

function initEvent(){

    if(!document.querySelector("#event")) return;

    gsap.timeline({

        scrollTrigger:{
            trigger:"#event",
            start:"top 70%",
            once:true

        }

    })

    .from('#event h2',{

        opacity:0,
        y:35

    })

    .from('#event [data-intro]',{

        opacity:0,
        y:25

    },"-=.3")

    .from('#event [data-card]',{

        opacity:0,
        y:60,
        duration:.8

    },"-=.2")

    .from('#event [data-button]',{

        opacity:0,
        scale:.9,
        duration:.4

    },"-=.4");

}

function initDressCode(){

    if(!document.querySelector("#dress")) return;

    gsap.timeline({

        scrollTrigger:{
            trigger:"#dress",
            start:"top 72%",
            once:true
        }

    })

    .from("#dress [data-badge]",{

        opacity:0,
        y:25,
        duration:.45

    })

    .from("#dress [data-title]",{

        opacity:0,
        y:35,
        duration:.6

    },"-=.2")

    .from("#dress [data-description]",{

        opacity:0,
        y:25,
        duration:.5

    },"-=.3")

    .from("#dress [data-color]",{

        opacity:0,
        scale:.75,
        stagger:.12,
        duration:.45,
        ease:"back.out(1.7)"

    },"-=.2");

}

function initGifts(){

    if(!document.querySelector("#gifts")) return;

    gsap.timeline({

        scrollTrigger:{
            trigger:"#gifts",
            start:"top 72%",
            once:true
        }

    })

    .from("#gifts [data-badge]",{

        opacity:0,
        y:25,
        duration:.45

    })

    .from("#gifts [data-title]",{

        opacity:0,
        y:35,
        duration:.6

    },"-=.2")

    .from("#gifts [data-envelope]",{

        opacity:0,
        y:60,
        scale:.95,
        duration:.8,
        ease:"power3.out"

    },"-=.2");

}

function initRSVP(){

    if(!document.querySelector("#rsvp")) return;

    gsap.timeline({

        scrollTrigger:{
            trigger:"#rsvp",
            start:"top 72%",
            once:true
        }

    })

    .from("#rsvp [data-badge]",{

        opacity:0,
        y:25,
        duration:.45

    })

    .from("#rsvp [data-title]",{

        opacity:0,
        y:35,
        duration:.6

    },"-=.2")

    .from("#rsvp [data-description]",{

        opacity:0,
        y:25,
        duration:.5

    },"-=.3")

    .from("#rsvp [data-card]",{

        opacity:0,
        y:40,
        duration:.6,
        ease:"power3.out"

    },"-=.2")

    .from("#rsvp [data-button]",{

        opacity:0,
        scale:.92,
        duration:.45

    },"-=.2");

}

function initFooter(){

    if(!document.querySelector("footer")) return;

    gsap.timeline({

        scrollTrigger:{
            trigger:"footer",
            start:"top 90%",
            once:true
        }

    })

    .from("footer [data-moon]",{

        opacity:0,
        scale:.5,
        duration:.5

    })

    .from("footer [data-overline]",{

        opacity:0,
        y:20,
        duration:.4

    },"-=.2")

    .from("footer h2",{

        opacity:0,
        y:35,
        duration:.5

    },"-=.2")

    .from("footer h1",{

        opacity:0,
        y:40,
        scale:.95,
        duration:.7

    },"-=.3")

    .from("footer [data-description]",{

        opacity:0,
        y:20,
        duration:.5

    },"-=.3");

}