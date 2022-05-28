<script>
import { currStamp } from "./StampSelect.svelte";


    export let changeGrids;

    function handleClick() {
        changeGrids($currStamp);
    }

</script>

<button on:click={handleClick}>
    <span>
        <slot />
    </span>
</button>


<style>
    button {
        height: 40px;
        width: 40px;
        background-color: yellow;
        border: 1px solid;
        cursor: inherit;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    button :global(svg) {
        height: 30px;
        width: 30px;
       
    }
    span :global(*) {
        fill: black;
    }

    button:hover {
        background-color: orange;
    }
</style>