<script context="module">
    import {writable} from "svelte/store";
    import { stamps } from "./const";
    export const currStamp = writable(null);

</script>

<script>
import TestCursor from "./Stamps/TestCursor.svelte";


    // let stamps = ["cake", "apple", "pink guy"];

    function changeStamp(stampIndex) {
       
        return () => {
            currStamp.set(stampIndex)
        
        }
    }
</script>

{#each stamps as stamp, i (i)}
    <button on:click={changeStamp(i)}> {stamp.title} </button>
{/each}

{#if $currStamp !== null}
    <TestCursor />
{/if}


<style>
    button {
        background-color: red;
        margin: 10px;
    }


</style>