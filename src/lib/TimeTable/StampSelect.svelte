<script context="module">
    import {writable} from "svelte/store";
import BookSvg from "./Stamps/svg/BookSVG.svelte";
import LinkedInSvg from "./Stamps/svg/LinkedInSVG.svelte";
    export const currStamp = writable(null);

</script>

<script>
import TestCursor from "./Stamps/TestCursor.svelte";


    // let stamps = ["cake", "apple", "pink guy"];

    const stamps = [
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

    function changeStamp(stampSVG) {
       
        return () => {
            currStamp.set(stampSVG)
        
        }
    }
</script>

{#each stamps as stamp (stamp)}
    <button on:click={changeStamp(stamp.svg)}> {stamp.title} </button>
{/each}

{#if $currStamp}
    <TestCursor >
        <svelte:component this={$currStamp}/>
    </TestCursor>
{/if}


<style>
    button {
        background-color: red;
        margin: 10px;
    }


</style>