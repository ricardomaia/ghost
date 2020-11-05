<script>
  import { getMessage } from "../library/getMessage";
  import { dateFormat } from "../library/dateFormat";
  export let issues;
</script>

<style>
  .incident-title {
    font-weight: bold;
  }

  .incident-update {
    color: #999;
    font-size: 90%;
  }
</style>

{#each issues as incident}
  {#each incident.labels as label}
    {#if label.name == 'incident'}
      <div class="row incident">
        <div class="col-md-12 incident-title">{incident.title}</div>
      </div>

      <div class="row">
        <div class="col-md-12">{incident.body}</div>
      </div>

      <div class="row incident-update">
        <div class="col-md-12">
          {getMessage('registered')}:
          {dateFormat(incident.created_at)}
          -
          {getMessage('updated')}:
          {dateFormat(incident.updated_at)}
          -
          {getMessage('closed')}:
          {dateFormat(incident.closed_at)}
        </div>
      </div>
      <hr />
    {/if}
  {/each}
{/each}
