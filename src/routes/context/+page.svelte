<script>
  import { setContext } from 'svelte';
  import { CifZw } from '$lib';
  const iconCtx = {
    width: '200'
  };
  setContext('iconCtx', iconCtx);
</script>

<CifZw />
