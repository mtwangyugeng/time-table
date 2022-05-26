<script>
    import { onDestroy, onMount } from "svelte";
    onMount(()=> {
        document.body.style.cursor = "pointer"
    })
    onDestroy(() => {
        document.body.style.cursor = "auto"
    })
</script>
