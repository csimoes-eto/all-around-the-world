<script context="module">
  export async function preload({ params }) {
    const getCountry = await this.fetch(
      `https://restcountries.eu/rest/v2/name/${params.country}`
    );
    const country = await getCountry.json();
    if (getCountry.ok && country[0].borders.length > 0) {
      let bordersCodes = country[0].borders;
      let url = "https://restcountries.eu/rest/v2/alpha?codes=";
      //Define URL for bordering countries info
      bordersCodes.forEach((borderCountry, index) => {
        if (index === bordersCodes.length - 1) {
          url += borderCountry;
        } else {
          url += `${borderCountry};`;
        }
      });

      const getBorders = await this.fetch(url);
      const borders = await getBorders.json();

      let borderingCountries = [];
      borders.forEach(country => {
        borderingCountries = [...borderingCountries, country.name];
      });

      country[0].borders = borderingCountries;

      return { country };
    } else if (getCountry.ok) return { country };
    else this.error(getCountry.status, err);
  }
</script>

<script>
  import CountryInfo from "../components/CountryInfo.svelte";

  export let country;
</script>

<style>
  @media (max-width: 480px) {
    button {
      width: 25% !important;
    }
  }
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
