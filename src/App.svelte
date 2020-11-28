<script>
  import StatusPage from "./components/StatusPage.svelte";
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
</script>

<style>
  #wrapper {
    box-shadow: rgba(0, 0, 0, 0.75) 0px 0px 33px -32px;
    border-radius: 3px;
    background-color: white;
    padding: 16px;
    margin: auto;
  }
</style>

<svelte:head>
  <script async defer src="https://buttons.github.io/buttons.js">
  </script>
  <title>Ghost - Git Hosted Status Page</title>
</svelte:head>

<div id="wrapper">
  <Header />
  <StatusPage />
  <Footer />
</div>
