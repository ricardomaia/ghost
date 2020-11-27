<script>
  import { getMessage } from "../library/getMessage";
  import { dateFormat } from "../library/dateFormat";
  import { getDate } from "../library/dateFormat";
  import { getTime } from "../library/dateFormat";
  let incident_class = "incident-closed";
  export let issues;
</script>

<style>
  .created {
    word-break: break-all;
    white-space: pre-line;
    float: left;
    padding-left: 10px;
    margin: -2px 0 0 4px;
  }

  .status {
    color: #20c997;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 80%;
    line-height: 1rem;
  }
  .timeline {
    border-left: solid 5px #e6e6e6;
  }
  .status::before {
    display: inline-block;
    content: "";
    -webkit-border-radius: 3rem;
    border-radius: 3rem;
    height: 0.8rem;
    width: 0.8rem;
    margin-right: 0.5rem;
    background-color: #ffffff;
    box-shadow: 0 0 0 3px #20c997;
  }

  .incident-container {
    margin-top: 10px;
  }
</style>

<div class="incident-container">
  {#each issues as incident}
    {#each incident.labels as label}
      {#if label.name == 'incident'}
        <div class="row">
          <div class="col-md-2">
            <span class="status">{getMessage(incident.state)}</span><br />
            <div class="created timeline">
              {getDate(incident.created_at)}
            </div><br />
            <div class="created timeline">
              {getTime(incident.created_at)}<br /><br />
            </div>
          </div>
          <div class="col-md-10">
            {incident.title}<br />
            {incident.body}

            <div class="row">
              <div class="col-md-12">
                {getMessage('updated')}:
                {dateFormat(incident.updated_at)}
                -
                {getMessage('closed')}:
                {dateFormat(incident.closed_at)}
              </div>
            </div>
          </div>
        </div>
      {/if}
    {/each}
  {/each}
</div>
