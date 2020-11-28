<script>
  import { getMessage } from "../library/getMessage";
  export let issues;
</script>

<style>
  .component-title::before {
    display: inline-block;
    content: "";
    -webkit-border-radius: 0.375rem;
    border-radius: 0.375rem;
    height: 0.75rem;
    width: 0.75rem;
    margin-right: 0.5rem;
  }

  .label {
    text-align: right;
    color: #cccccc;
    text-transform: initial;
  }

  .label:first-letter {
    text-transform: uppercase;
  }

  .component-title.operational::before {
    background-color: #20c997;
  }

  .component-title.performance-issues::before {
    background-color: #ffcc00;
  }
  .component-title.major-outage::before {
    background-color: #dc3545;
  }

  .component-title.partial-outage::before {
    background-color: #5f8dd3;
  }

  .component {
    background-color: rgb(247, 248, 249);
    border-radius: 7px;
    align-items: center;
    margin: 4px 0px 4px 0px;
    padding: 8px 2px;
    color: #000000;
  }
</style>

{#each issues as component}
  {#each component.labels as label}
    {#if label.name == 'operational' || label.name == 'performance issues' || label.name == 'major outage' || label.name == 'partial outage'}
      <div class="row component">
        <div class="col-8 col-md-8">
          <span
            class="component-title {label.name.replace(' ', '-')}">{component.title}</span>
        </div>
        <div class="col-4 col-md-4 label">
          <span class="label-text">{getMessage(label.name)}</span>
        </div>
      </div>
    {/if}
  {/each}
{/each}
