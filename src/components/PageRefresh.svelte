<script>
  import { onMount } from "svelte";
  import { getMessage } from "../library/getMessage";
  let count = 0;
  $: remaining = 60 - count;

  const countdown = () => {
    if (remaining >= 0) {
      count++;
    }
  };

  onMount(async () => {
    setInterval(() => {
      countdown();
      if (remaining <= 0) location.reload();
    }, 1000);
  });
</script>

<style>
  .page-refresh {
    color: #c0c0c0;
    line-height: 40px;
    text-align: right;
    font-size: 90%;
    padding-left: 15px;
    float: left;
  }
</style>

<!--
For unauthenticated requests, the rate limit allows for up to 60 requests per hour.
Unauthenticated requests are associated with the originating IP address, and not the 
user making requests.

https://developer.github.com/v3/#rate-limiting
-->
<div class="row page-refresh">
  {getMessage('reloading_in', { '%seconds%': remaining })}
</div>
