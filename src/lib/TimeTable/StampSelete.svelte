<script context="module">
    import {writable} from "svelte/store";


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