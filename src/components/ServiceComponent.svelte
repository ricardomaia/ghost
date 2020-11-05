<script>
  import { getMessage } from "../library/getMessage";
  export let issues;
</script>

<style>
  .label {
    padding: 5px 12px;
    border-radius: 5px;
    width: fit-content;
    text-align: center;
  }

  .component {
    background-color: rgb(247, 248, 249);
    border-radius: 3px;
    align-items: center;
    margin: 8px 0px 8px 0px;
    padding: 5px 10px;
  }
</style>

{#each issues as component}
  {#each component.labels as label}
    {#if label.name == 'operational' || label.name == 'performance issues' || label.name == 'major outage' || label.name == 'partial outage'}
      <div class="row component">
        <div class="col-md-8">{component.title}</div>
        <div class="col-md-4 label " style="background:#{label.color}">
          {getMessage(label.name)}
        </div>
      </div>
    {/if}
  {/each}
{/each}
