<script context="module">
    import {writable} from "svelte/store";
import LinkedInSvg from "./Stamps/svg/LinkedInSVG.svelte";
    export const currStamp = writable(null);

</script>

<script>
import TestCursor from "./Stamps/TestCursor.svelte";


    let stamps = ["cake", "apple", "pink guy"];

    function changeStamp(stamp) {
       
        return () => {
            tc = !tc;
        console.log(tc)
        
        }
    }
    $: currStamp.set(tc ? LinkedInSvg: null)
    let tc = false;
</script>

{#each stamps as stamp (stamp)}
    <button on:click={changeStamp(stamp)}> {stamp} </button>
{/each}

{#if tc}
    <TestCursor />
{/if}


<style>
    button {
        background-color: red;
        margin: 10px;
    }


</style>