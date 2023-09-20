<script>
  import { setContext } from 'svelte';
  import { CibAdobeAfterEffects, CibAllocine } from '$lib';
  const iconCtx = {
    size: '200', // Icon size in pixels
    color: '#444488', // Icon color in hexadecimal or CSS color name
    role: 'svg icon image'
  };
  setContext('iconCtx', iconCtx);
  let size = '24';
</script>

<CibAdobeAfterEffects />
<CibAllocine />
