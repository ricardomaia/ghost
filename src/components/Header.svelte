<script>
  import { getMessage } from "../library/getMessage";
  import PageRefresh from "./PageRefresh.svelte";
  import Logo from "./Logo.svelte";
  import { Button } from "sveltestrap";
</script>

<style>
  .app-title {
    font-weight: bolder;
    text-transform: uppercase;
    font-size: large;
    line-height: 40px;
  }
</style>

<div class="row">
  <div class="col-md-8">
    <Logo /><span class="app-title">{getMessage('service_status')}</span>
  </div>
  <div class="col-md-4">
    <PageRefresh />
  </div>
</div>
