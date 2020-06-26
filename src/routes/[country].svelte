<script context="module">
  export async function preload({ params }) {
    const getCountry = await this.fetch(
      `https://restcountries.eu/rest/v2/name/${params.country}`
    );
    const country = await getCountry.json();
    if (getCountry.ok) {
      return { country };
    } else this.error(getCountry.status, err);
  }
</script>

<script>
  import CountryInfo from "../components/CountryInfo.svelte";

  export let country;
</script>

<style>
  button {
    box-shadow: 0px 0px 5px 1px rgba(133, 133, 133, 0.3);
    border-radius: 5px;
    border-color: transparent;
    font-size: 0.875em;
    width: 10vw;
    height: 5vh;
    margin-bottom: 3em;

    overflow: hidden;
  }

  button:hover {
    box-shadow: 0px 0px 5px 5px rgba(133, 133, 133, 0.3);
    outline-color: transparent;
    cursor: pointer;
  }

  button:focus {
    outline-color: transparent;
  }
</style>

<svelte:head>
  <title>{country[0].name}</title>
</svelte:head>
<a href="/">
  <button type="button">Back</button>
</a>
<CountryInfo {...country[0]} />
