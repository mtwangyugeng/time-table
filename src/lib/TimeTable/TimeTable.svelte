<script>
import { CELL_LENGTH, DAYS, WORKING_HOURS } from "./const";
import Grid from "./Grid.svelte";
import StampSelete from "./StampSelete.svelte";

    const nRows = WORKING_HOURS / CELL_LENGTH
    let grids = Array(Math.ceil(DAYS))
                .fill(null)
                .map(_ => Array(nRows).fill(null))

    
</script>

<div class=Table>
{#each grids as col,i (i)}
    <span>
        <div class=Day>
            {i + 1}
        </div>

        <div class=Col>
        {#each col as grid,j (j)}
        <span>
            {#if i === 0}
                {(j + 1) * CELL_LENGTH}
            {/if}
            <Grid grid={grid} pos={[i, j]}/>
        </span>
        {/each}
        </div>
    </span>
{/each}
</div>
<StampSelete />


<style>
    .Table {
        display: flex;
    }
    .Day {
        text-align: right;
    }
    .Col {
        display: flex;
        flex-direction: column;
    }
    .Col * {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>
