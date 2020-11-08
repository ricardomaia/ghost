<script>
  import { getMessage } from "../library/getMessage";
  import { dateFormat } from "../library/dateFormat";
  let incident_class = "incident-closed";
  export let issues;
</script>

<style>
  .incident-title {
    font-weight: bold;
  }
  .incident-status {
    font-weight: bold;
  }

  .incident-update {
    color: #999;
    font-size: 90%;
  }

  .incident-status {
    padding: 2px 6px;
    border-radius: 3px;
    margin: 0px 2px;
    font-size: 80%;
  }

  .incident-open {
    color: #ffffff;
    background-color: #20c997;
  }

  .incident-closed {
    color: #ffffff;
    background-color: #dc3545;
  }
</style>

{#each issues as incident}
  {#each incident.labels as label}
    {#if label.name == 'incident'}
      <div class="row incident">
        <div class="col-md-12">
          <span
            class="incident-status incident-{incident.state}">{getMessage(incident.state)}</span>
          <span class="incident-title">{incident.title}</span>
        </div>
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
