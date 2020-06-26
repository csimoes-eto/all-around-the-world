<script>
  export let flag, name, population, region, capital;

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
</script>

<style>
  @media (max-width: 480px) {
    .card {
      width: 75% !important;
      margin-left: auto;
      margin-right: auto;
    }
  }
  img {
    width: 100%;
    height: 50%;
    object-fit: cover;
  }

  h4 {
    font-weight: 800;
    margin: 0.75em 0 0.5em 0;
  }

  span {
    font-weight: 600;
  }

  p {
    margin: 0 0 0.25em 0;
    font-weight: 300;
    font-size: 0.875em;
  }

  a {
    color: inherit;
    text-decoration: inherit;
    width: inherit;
    height: initial;
  }

  a:hover {
    opacity: 70%;
  }

  .card {
    box-shadow: 0px 0px 5px 1px rgba(133, 133, 133, 0.3);
    border-radius: 5px;
    margin-bottom: 3.75em;
    width: 18vw;
    flex-basis: auto;
    overflow: hidden;
  }

  .container-info {
    width: 80%;
    margin: auto auto;
  }
</style>

<div class="card">
  <a href={name} rel="prefetch">
    <img src={flag} alt="{name} flag" />
  </a>
  <div class="container-info">
    <a href={name} rel="prefetch">
      <h4>{name}</h4>
    </a>
    <p>
      <span>Population:</span>
      {numberWithCommas(population)}
    </p>
    <p>
      <span>Region:</span>
      {region}
    </p>
    <p>
      <span>Capital:</span>
      {capital}
    </p>
  </div>
</div>
