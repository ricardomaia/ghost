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
    margin: -1 0 0 -150px;
    position: absolute;
  }

  .status {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 85%;
    line-height: 1.5rem;
    margin-left: -25px;
  }
  .timeline {
    border-left: solid 5px #e6e6e6;
    position: absolute;
    margin-left: 30px;
    height: 100%;
  }

  .timeline-end {
    border-left: dotted 5px #e6e6e6;
    margin-top: 5px;
    margin-left: 30px;
  }

  .timeline-row {
    padding-left: 25px;
    min-width: 120px;
  }
  .status::before {
    display: inline-block;
    content: "";
    -webkit-border-radius: 3rem;
    border-radius: 3rem;
    height: 0.9rem;
    width: 0.9rem;
    margin-right: 0.5rem;
    background-color: #ffffff;
    box-shadow: 0 0 0 3px #20c997;
  }

  .status-open {
    color: #20c997;
  }

  .status-closed {
    color: #dc3545;
  }

  .status-open::before {
    box-shadow: 0 0 0 3px #20c997;
  }

  .status-closed::before {
    box-shadow: 0 0 0 3px #dc3545;
  }

  .incident-container {
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .incident-date {
    font-size: 80%;
    font-weight: bold;
    color: #4d4d4d;
  }
  .incident-time {
    font-size: 80%;
  }

  .incident-title {
    font-weight: bold;
    font-size: 110%;
  }

  .incident-body {
    text-align: justify;
    color: #555555;
  }

  .incident-history {
    font-size: 85%;
    color: #e15f41;
    margin-bottom: 20px;
  }
  .partial-border {
    display: inline-block;
    position: relative;
    border-left: 1px solid #c0c0c0;
    padding-left: 20px;
    margin-left: -20px;
  }
</style>

<div class="incident-container">
  {#each issues as incident}
    {#each incident.labels as label}
      {#if label.name == 'incident'}
        <div class="row">
          <div class="col-md-2">
            <div class="row">
              <div class="col-md-12 timeline">
                <span
                  class="status status-{incident.state}">{getMessage(incident.state)}</span><br />
                <span
                  class="incident-date">{getDate(incident.created_at)}</span><br />
                <span
                  class="incident-time">{getTime(incident.created_at)}</span>
              </div>
            </div>
          </div>

          <div class="col-md-10">
            <span class="incident-title"> {incident.title}</span><br />
            <span class="incident-body partial-border"> {incident.body} </span>

            <div class="row incident-history">
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
        <!-- Incident -->
      {/if}
    {/each}
  {/each}

  <!-- End row -->
  <div class="row">
    <div class="col-md-12 timeline-end">&nbsp;</div>
  </div>
</div>
