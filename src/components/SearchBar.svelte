<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
</script>

<style>
  input {
    box-shadow: 0px 0px 5px 1px rgba(133, 133, 133, 0.3);
    border-radius: 5px;
    border-color: transparent;
    font-size: 0.875em;
    width: 30vw;
    height: 5vh;
    margin-bottom: 3em;
  }

  input:focus {
    box-shadow: 0px 0px 5px 5px rgba(133, 133, 133, 0.3);
    outline-color: transparent;
  }
</style>

<input
  type="text"
  placeholder="Search for a country..."
  on:keypress={e => {
    dispatch('valueChange', e.target.value);
  }}
  on:keydown={e => {
    dispatch('valueChange', e.target.value);
  }}
  on:keyup={e => {
    dispatch('valueChange', e.target.value);
  }} />
