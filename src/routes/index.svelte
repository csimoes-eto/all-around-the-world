<script>
  import fetch from "node-fetch";

  import CountryCard from "../components/CountryCard.svelte";
  import SearchBar from "../components/SearchBar.svelte";
  import RegionPicker from "../components/RegionPicker.svelte";

  let searchTerm;
  let filteredCountries;
  let regionToSearch;

  const allCountriesRequest = (async () => {
    const response = await fetch("https://restcountries.eu/rest/v2/all");
    return await response.json();
  })();

  function findMatches(termToMatch, countries) {
    let regex = new RegExp(termToMatch, "gi");

    return countries.filter(country => {
      return country.name.match(regex) || country.region.match(regex);
    });
  }

  function handleSearch(e, countries) {
    searchTerm = e.detail;
    filteredCountries = findMatches(searchTerm, countries);
  }
</script>

<style>
  @media (max-width: 480px) {
    .cards-container {
      flex-direction: column;
    }
  }

  .outer-container {
    height: 100%;
    /* padding-bottom: 10em; */
  }

  .loading {
    height: 80.5vh;
  }

  .cards-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
  }
</style>

<svelte:head>
  <title>All Around The World</title>
</svelte:head>

<div class="outer-container">
  {#await allCountriesRequest}
    <div class="loading">
      <p>Loading...</p>
    </div>
  {:then allCountries}
    <div class="filters">
      <SearchBar
        {searchTerm}
        on:valueChange={e => handleSearch(e, allCountries)} />
      <RegionPicker
        {regionToSearch}
        on:newRegion={e => handleSearch(e, allCountries)} />
    </div>
    <div class="cards-container">
      {#if searchTerm === undefined || searchTerm === ''}
        {#each allCountries as country}
          <CountryCard {...country} />
        {/each}
      {:else}
        {#each filteredCountries as country}
          <CountryCard {...country} />
        {/each}
      {/if}
    </div>
  {:catch error}
    <p>ERROR: {error}</p>
  {/await}

</div>
