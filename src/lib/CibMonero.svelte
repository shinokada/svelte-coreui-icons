<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib monero';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  {role}
  {...$$restProps}
  aria-label={ariaLabel}
  fill={color}
  on:click
  on:keydown
  on:keyup
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
  viewBox="0 0 32 32"
>
  <path
    d="M16 0c-8.849 0-16 7.161-16 16.021 0 1.781 0.303 3.473 0.823 5.077h4.771v-13.459l10.407 10.423 10.407-10.423v13.459h4.771c0.516-1.604 0.823-3.296 0.823-5.077 0-8.855-7.151-16.021-16-16.021zM13.615 20.412l-4.552-4.563v8.468h-6.719c2.817 4.6 7.896 7.683 13.656 7.683s10.88-3.083 13.661-7.688h-6.724v-8.463l-4.511 4.557-2.385 2.391-2.416-2.391h-0.011z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib monero';
-->
