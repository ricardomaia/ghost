<script>
  const getComponents = (async () => {
    const response = await fetch(
      "https://api.github.com/repos/ricardomaia/statuspage/issues?state=all&labels=component"
    );
    return await response.json();
  })();

  const getIncidents = (async () => {
    const response = await fetch(
      "https://api.github.com/repos/ricardomaia/statuspage/issues?state=all&labels=incident"
    );
    return await response.json();
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
    min-width: 120px;
    text-align: center;
  }

  .label span {
    color: black;
    mix-blend-mode: multiply;
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
  }
</style>

<div id="wrapper">
  {#await getComponents}
    <p>carregando...</p>
  {:then data}
    {#each data as component}
      <div class="component">
        {#each component.labels as label}
          {#if label.name == 'component'}{component.title}{/if}
          &nbsp;
          {#if label.name == 'operational' || label.name == 'performance issues' || label.name == 'major outage' || label.name == 'partial outage'}
            <div class="label" style="background:#{label.color}">
              <span>{label.name}</span>
            </div>
          {/if}
        {/each}
      </div>
    {/each}
  {:catch error}
    <p>An error occurred!</p>
  {/await}
  <hr />

  Past incidents
  {#await getIncidents}
    <p>carregando...</p>
  {:then data}
    {#each data as incident}
      <div class="incident">
        {incident.title}<br />
        {incident.body}<br />
        Registrado:
        {dateFormat(incident.created_at)}<br />
        Atualizado:
        {dateFormat(incident.updated_at)}<br />
        Encerrado:
        {dateFormat(incident.closed_at)}<br />

        <div>{incident.state}</div>
      </div>
    {/each}
  {:catch error}
    <p>An error occurred!</p>
  {/await}
</div>
