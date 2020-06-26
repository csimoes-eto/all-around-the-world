<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
</script>

<style>
  select {
    float: right;
    box-shadow: 0px 0px 5px 1px rgba(133, 133, 133, 0.3);
    border-radius: 5px;
    border-color: transparent;
    font-size: 0.875em;
    width: 12vw;
    height: 5.8vh;
    margin-bottom: 3em;
  }

  select:focus {
    box-shadow: 0px 0px 5px 5px rgba(133, 133, 133, 0.3);
    outline-color: transparent;
  }
</style>

<select
  name="regions"
  on:change={e => {
    dispatch('newRegion', e.target.value);
  }}>
  <option value="" selected>Filter By Region</option>
  <option value="Africa">Africa</option>
  <option value="America">America</option>
  <option value="Asia">Asia</option>
  <option value="Europe">Europe</option>
  <option value="Oceania">Oceania</option>
</select>
