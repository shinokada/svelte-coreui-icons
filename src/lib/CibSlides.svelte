<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib slides';
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
    d="M0 0v32h32v-32zM18.901 21.057c-0.86 0.781-1.88 1.161-3.079 1.161-1.203 0-2.219-0.183-3.099-0.541-0.864-0.36-1.303-0.699-1.303-1.041l-0.104 0.129c0-0.177 0.109-0.432 0.328-0.781 0.219-0.348 0.412-0.52 0.589-0.52 0.016 0 0.156 0.077 0.416 0.244 0.261 0.167 0.631 0.328 1.115 0.495 0.485 0.167 1.073 0.251 1.756 0.251 0.703 0 1.26-0.199 1.703-0.589 0.437-0.391 0.656-0.916 0.656-1.583s-0.197-1.188-0.577-1.563c-0.381-0.375-1.163-0.724-2.324-1.052-1.156-0.333-2-0.755-2.515-1.26-0.521-0.516-0.781-1.292-0.781-2.333 0-1.043 0.396-1.912 1.197-2.615 0.803-0.719 1.839-1.063 3.12-1.063 0.901 0 1.683 0.099 2.38 0.339 0.699 0.224 1.041 0.479 1.041 0.739 0 0.22-0.104 0.521-0.301 0.86-0.203 0.36-0.38 0.521-0.521 0.521-0.020 0-0.12-0.057-0.344-0.161-0.577-0.319-1.239-0.48-1.979-0.48s-1.303 0.141-1.719 0.443c-0.401 0.297-0.599 0.699-0.599 1.177s0.161 0.86 0.457 1.14c0.297 0.281 0.819 0.521 1.557 0.761 1.641 0.5 2.74 1.036 3.324 1.64 0.577 0.599 0.88 1.5 0.88 2.699 0 1.197-0.417 2.197-1.276 2.979z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib slides';
-->
