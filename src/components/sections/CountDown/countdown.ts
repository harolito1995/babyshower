import type { CountdownOptions, CountdownValues } from "./types";

export class Countdown {

    private interval?: number;

    constructor(private options: CountdownOptions) {}

    private calculate(): CountdownValues {

        const now = new Date().getTime();

        const distance = this.options.targetDate.getTime() - now;

        if (distance <= 0) {

            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            };

        }

        return {

            days: Math.floor(distance / (1000 * 60 * 60 * 24)),

            hours: Math.floor(
                (distance % (1000 * 60 * 60 * 24))
                / (1000 * 60 * 60)
            ),

            minutes: Math.floor(
                (distance % (1000 * 60 * 60))
                / (1000 * 60)
            ),

            seconds: Math.floor(
                (distance % (1000 * 60))
                / 1000
            )

        };

    }

    start(callback:(value:CountdownValues)=>void){

        callback(this.calculate());

        this.interval = window.setInterval(()=>{

            callback(this.calculate());

        },1000);

    }

    destroy(){

        if(this.interval){

            clearInterval(this.interval);

        }

    }

}