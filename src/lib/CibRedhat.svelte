<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib redhat';
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
    d="M21.344 17.849c2.104 0 5.145-0.437 5.145-2.937 0.011-0.193-0.011-0.385-0.052-0.573l-1.249-5.443c-0.292-1.199-0.543-1.74-2.647-2.792-1.629-0.833-5.181-2.208-6.235-2.208-0.979 0-1.26 1.26-2.427 1.26-1.125 0-1.959-0.943-3.011-0.943-1.005 0-1.667 0.688-2.172 2.104 0 0-1.411 3.985-1.593 4.563-0.031 0.109-0.041 0.219-0.036 0.328 0 1.552 6.099 6.636 14.276 6.636zM26.812 15.927c0.292 1.376 0.292 1.521 0.292 1.704 0 2.353-2.645 3.661-6.125 3.661-7.859 0.005-14.744-4.604-14.744-7.647 0-0.427 0.083-0.843 0.249-1.233-2.823 0.14-6.484 0.645-6.484 3.88 0 5.292 12.541 11.812 22.469 11.812 7.613 0 9.531-3.443 9.531-6.161 0-2.14-1.849-4.568-5.183-6.016z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib redhat';
-->
