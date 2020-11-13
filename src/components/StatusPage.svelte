<script>
  import { onMount } from "svelte";
  import { getMessage } from "../library/getMessage";
  import { dateFormat } from "../library/dateFormat";
  import { dateSubDays } from "../library/dateSubDays";
  import MessageBox from "./MessageBox.svelte";
  import ServiceComponent from "./ServiceComponent.svelte";
  import Incident from "./Incident.svelte";
  import * as config from "../config.json";

  onMount(async () => {
    /** console.log("Mounted"); */
  });

  const getIssues = (async () => {
    const today = new Date();
    const incident_days = config.incident_days;
    const dateLimit = dateSubDays(today, incident_days);
    const dateLimitISO = dateLimit.toISOString();

    let repoUrl = "issues.json";

    if (process.env.isProd) {
      repoUrl = `https://api.github.com/repos/${config.user}/${config.repo}/issues?state=all&sort=updated&direction=desc&labels=statuspage&since=${dateLimitISO}`;
    }

    const response = await fetch(repoUrl);
    if (response.ok) {
      return response.json();
    } else {
      if (response.status == "404") {
        throw Error("Network error");
      }

      if (response.status == "403") {
        let resetTime = dateFormat(
          new Date(response.headers.get("X-RateLimit-Reset") * 1000)
        );

        throw Error(
          `${getMessage(response.statusText)} 
          ${getMessage("reset_time", { "%reset_time%": resetTime })}`
        );
      }
    }
  })();
</script>

<style>
  .section {
    background: #efefef;
    border-radius: 5px 5px 0px 0px;
    border-bottom: solid 1px #c0c0c0;
    color: #808080;
    font-weight: bolder;
    padding: 10px 20px;
    text-transform: capitalize;
  }
</style>

{#await getIssues}
  <MessageBox type="primary" message="{getMessage('loading')}..." />
{:then data}
  <div class="row section">{getMessage('component')}</div>
  <ServiceComponent issues={data} />
  <div class="row section">{getMessage('incident')}</div>
  <Incident issues={data} />
{:catch error}
  <MessageBox type="danger" message={error} />
{/await}
