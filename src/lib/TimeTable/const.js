import BookSvg from "./Stamps/svg/BookSVG.svelte";
import LinkedInSvg from "./Stamps/svg/LinkedInSVG.svelte";

export const WORKING_HOURS = 8;
export const CELL_LENGTH = 0.5; // in hours
export const DAYS = 15;

export const stamps = [
    {
        title: "LinkedIn",
        svg: LinkedInSvg,
        description: "Job hunting for 2 hours."
    }, 
    {
        title: "Read",
        svg: BookSvg,
        description: "Read for 2hours"
    }
]