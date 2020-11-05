<script>
  import { getMessage } from "../library/getMessage";
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
  <Logo /><span class="app-title">{getMessage('service_status')}</span>
</div>
