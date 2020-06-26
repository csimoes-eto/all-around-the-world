<script>
  import fetch from "node-fetch";
  import { onMount } from "svelte";

  export let flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders;

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  let displayCurrencies = [];

  currencies.forEach(currency => {
    displayCurrencies = [...displayCurrencies, currency.name];
  });

  let displayLanguages = [];

  languages.forEach(language => {
    displayLanguages = [...displayLanguages, language.name];
  });
</script>

<style>
  span {
    font-weight: 600;
  }

  h2 {
    margin: 0;
  }

  p {
    margin: 0 0 0.25em 0;
    font-weight: 300;
    font-size: 1em;
  }

  img {
    width: 75%;
    height: auto;
  }

  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 0;
  }

  .flag-image {
    align-self: center;
  }

  .country-info-outter {
    display: grid;
    grid-template-columns: [col1] 1fr [col2] 1fr;
    grid-template-rows: [row1] 2fr [row2] 5fr [row3] 2fr;
    grid-column-gap: 2rem;

    /* align-self: center; <-- center vertically as a cell of outter grid*/
  }

  .country-info-name {
    align-self: center;
  }

  .country-info-inner-left {
    grid-column-start: col1;
    grid-row-start: row2;
  }
  .country-info-inner-right {
    grid-column-start: col2;
    grid-row-start: row2;
  }
  .country-info-borders {
    grid-column-start: col1;
    grid-column-end: end;
    grid-row-start: row3;
  }

  .country-info-borders p {
    float: left;
    margin: 0.25rem 0 0 0;
  }

  .country-info-borders button {
    margin-bottom: 0;
    float: left;
    margin: 0.25rem 0.5rem;

    box-shadow: 0px 0px 5px 1px rgba(133, 133, 133, 0.3);
    border-radius: 5px;
    border-color: transparent;
    font-size: 0.875em;
    width: auto;
    height: 3vh;

    overflow: hidden;
  }

  .country-info-borders button:hover {
    box-shadow: 0px 0px 5px 5px rgba(133, 133, 133, 0.3);
    outline-color: transparent;
    cursor: pointer;
  }

  .country-info-borders button:focus {
    outline-color: transparent;
  }

  /* .bordering-countries-outter {
    width: 100%;
    text-align: center;
  }
  .bordering-countries-inner {
    display: inline-block;
  } */
</style>

<div class="container">
  <div class="flag-image">
    <img src={flag} alt="{name} flag" />
  </div>

  <div class="country-info-outter">
    <div class="country-info-name">
      <h2>{name}</h2>
    </div>
    <div class="country-info-inner-left">
      <p>
        <span>Native Name:</span>
        {nativeName}
      </p>
      <p>
        <span>Population:</span>
        {numberWithCommas(population)}
      </p>
      <p>
        <span>Region:</span>
        {region}
      </p>
      <p>
        <span>Sub Region:</span>
        {subregion}
      </p>
      <p>
        <span>Capital:</span>
        {capital}
      </p>
    </div>
    <div class="country-info-inner-right">
      <p>
        <span>Top Level Domain:</span>
        {topLevelDomain}
      </p>
      <p>
        <span>Currencies:</span>
        {displayCurrencies.join(', ')}
      </p>
      <p>
        <span>Languages:</span>
        {displayLanguages.join(', ')}
      </p>
    </div>
    {#if borders.length > 0}
      <div class="country-info-borders">
        <p>
          <span>Border Countries:</span>
        </p>
        <div class="bordering-countries-outter">
          {#if borders.length > 0}
            {#each borders as borderingCountry}
              <div class="bordering-countries-inner">
                <a href={borderingCountry} rel="prefetch">
                  <button>{borderingCountry}</button>
                </a>
              </div>
            {/each}
          {/if}
        </div>
      </div>
    {/if}
  </div>
</div>
