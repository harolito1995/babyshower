export interface Star {

    id: number;

    x: number;

    y: number;

    size: number;

    opacity: number;

    delay: number;

    duration: number;

    type: "small" | "medium" | "sparkle";

}

export const stars: Star[] = [

    {
        id: 1,
        x: 12,
        y: 10,
        size: 2,
        opacity: .7,
        delay: .2,
        duration: 4,
        type: "small"
    },

    {
        id: 2,
        x: 78,
        y: 18,
        size: 3,
        opacity: .9,
        delay: 1.1,
        duration: 6,
        type: "sparkle"
    },

    {
        id: 3,
        x: 55,
        y: 30,
        size: 2,
        opacity: .5,
        delay: .7,
        duration: 5,
        type: "medium"
    }

];