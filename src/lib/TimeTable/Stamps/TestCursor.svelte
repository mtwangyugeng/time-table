<script>
    import { onDestroy, onMount } from "svelte";
import LinkedInSvg from "./svg/LinkedInSVG.svelte";
    onMount(()=> {
        document.body.style.cursor = "none";
    })
    onDestroy(() => {
        document.body.style.cursor = "auto";
    })

    let pX;
    let pY;
    const handleMove = (e) => {
        if (e.type === "mousemove"){
            pX = e.clientX;
            pY = e.clientY;
        } else {
            pX = e.touches[0].clientX;
            pY = e.touches[0].clientY;
        }
    }
</script>

<svelte:window on:mousemove={handleMove} on:touchmove={handleMove}/>

<span style="top: {pY}px; left: {pX}px;">
    <slot />
</span>

<style>
    span {
        position: fixed;
        pointer-events: none;
    }

    span :global(svg) {
        width: 30px;
        height: 30px;
    }
</style>
