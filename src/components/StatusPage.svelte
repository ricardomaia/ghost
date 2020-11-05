<script>
  import { onMount } from "svelte";
  import * as messages from "../messages.json";
  import Logo from "./Logo.svelte";
  import * as config from "../config.json";

  onMount(async () => {
    /** console.log("Mounted"); */
  });

  const getLanguage = () => {
    const userLang = navigator.language || navigator.userLanguage;
    const lang = userLang.replace("-", "_");
    const supportedLanguages = ["en", "pt-BR"];
    return lang;
  };

  const getMessage = (label) => {
    return messages[getLanguage()][label];
  };

  const getComponents = (async () => {
    const response = await fetch(config.componentUrl);
    console.log(response);
    if (response.ok) {
      return response.json();
    } else {
      throw Error(response.statusText);
    }
  })();

  const getIncidents = (async () => {
    const response = await fetch(config.incidentUrl);
    if (response.ok) {
      return response.json();
    } else {
      throw Error(response.statusText);
    }
  })();

  const dateFormat = (date) => {
    if (date == null || date == "") return "--";
    var date = new Date(date);
    return date.toLocaleString("pt-BR");
  };
</script>

<style>
  .label {
    padding: 5px 12px;
    border-radius: 16px;
    font-size: 13px;
    transition: all 0.3s ease 0s;
    min-width: 200px;
    text-align: center;
  }

  .section::first-letter {
    text-transform: uppercase;
  }

  .section {
    display: block;
    background: #efefef;
    padding: 10px;
    border-radius: 5px 5px 0px 0px;
    border-bottom: solid 1px #c0c0c0;
    color: #808080;
    font-weight: bolder;
  }

  .label span {
    color: black;
    mix-blend-mode: multiply;
  }

  .label span::first-letter {
    text-transform: uppercase;
  }
  .component {
    background-color: rgb(247, 248, 249);
    padding: 8px 16px;
    border-radius: 3px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    margin-bottom: 10px;
  }

  #wrapper {
    box-shadow: rgba(0, 0, 0, 0.75) 0px 0px 33px -32px;
    border-radius: 3px;
    background-color: white;
    padding: 16px;
    max-width: 80vw;
    margin: auto;
  }

  .error {
    border: 1px solid;
    margin: 10px 0px;
    padding: 15px 10px 15px 50px;
    background-repeat: no-repeat;
    background-position: 10px center;
  }

  .error {
    color: #d8000c;
    background-color: #ffbaba;
  }

  #app {
    padding: 10px 80px;
    font-weight: bold;
    text-transform: uppercase;
  }
</style>

<div id="wrapper">
  <Logo />
  <div id="app">{getMessage('service_status')}</div>
  <div class="section">{getMessage('component')}</div>
  {#await getComponents}
    <p>{getMessage('loading')}...</p>
  {:then data}
    {#each data as component}
      <div class="component">
        {#each component.labels as label}
          {#if label.name == 'component'}{component.title}{/if}
          &nbsp;
          {#if label.name == 'operational' || label.name == 'performance issues' || label.name == 'major outage' || label.name == 'partial outage'}
            <div class="label" style="background:#{label.color}">
              <span>{getMessage(label.name)}</span>
            </div>
          {/if}
        {/each}
      </div>
    {/each}
  {:catch error}
    <div class="error">{getMessage(error)}</div>
  {/await}

  <div class="section ucfirst">{getMessage('past_incidents')}</div>
  {#await getIncidents}
    <p>{getMessage('loading')} ...</p>
  {:then data}
    {#each data as incident}
      <div class="incident">
        <h3>{incident.title} - {incident.state}</h3>
        <p>{incident.body}</p>
        {getMessage('registered')}:
        {dateFormat(incident.created_at)}
        -
        {getMessage('updated')}:
        {dateFormat(incident.updated_at)}
        -
        {getMessage('closed')}:
        {dateFormat(incident.closed_at)}
        <hr />
      </div>
    {/each}
  {:catch error}
    <div class="error">{getMessage(error)}</div>
  {/await}
</div>
