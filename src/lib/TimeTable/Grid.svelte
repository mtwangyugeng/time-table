<script>
    export let grid = null;
    export let pos;

    function handleClick() {
        
    }
</script>

<button on:click={handleClick}>
    {pos}
</button>


<style>
    button {
        height: 40px;
        width: 40px;
        background-color: yellow;
        border: 1px solid;
        cursor: inherit;
    }
    button:hover {
        background-color: orange;
    }
</style>