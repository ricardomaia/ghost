<script>
  import { getMessage } from "../library/getMessage";
  import PageRefresh from "./PageRefresh.svelte";
  import Logo from "./Logo.svelte";
  import * as config from "../config.json";
</script>

<style>
  .refresh {
    padding-right: 20px;
  }
</style>

<div class="row">
  <div class="col-md-12">
    <Logo />
    <div class="refresh float-right">
      {#if config.auto_refresh}
        <PageRefresh />
      {/if}
    </div>
  </div>
</div>
