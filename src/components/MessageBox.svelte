<script>
  export let message = "";
  export let type = "primary";
</script>

<!--
  Types supported (by Bootstrap):
  - primary
  - secondary
  - success
  - danger
  - warning
  - info
  - light
  - dark
-->
<div class="alert alert-{type}" role="alert">{message}</div>
