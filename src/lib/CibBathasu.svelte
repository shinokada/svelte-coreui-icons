<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib bathasu';
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
    d="M27.979 29.688c-0.443 0-0.875-0.12-1.26-0.344-1.197-0.693-1.609-2.224-0.916-3.427 2.547-4.396 1.025-10.053-3.387-12.595-1.4-0.807-2.973-1.229-4.604-1.229-0.437 0-0.88-0.12-1.255-0.344-1.197-0.687-1.62-2.223-0.917-3.421 0.439-0.765 1.261-1.24 2.163-1.245 2.484 0 4.947 0.652 7.115 1.901 3.28 1.901 5.624 4.975 6.609 8.641 0.979 3.667 0.479 7.495-1.423 10.801-0.443 0.761-1.281 1.24-2.161 1.24l0.052 0.005zM12.677 31.432c-5.084 0-9.808-2.729-12.344-7.115-0.693-1.192-0.276-2.729 0.921-3.416 1.161-0.672 2.756-0.235 3.417 0.916 1.645 2.844 4.703 4.609 7.995 4.609 1.604 0 3.197-0.427 4.599-1.233 1.38-0.824 2.541-1.985 3.365-3.387 0.219-0.38 0.52-0.703 0.916-0.921 1.147-0.683 2.751-0.24 3.412 0.901 0.443 0.76 0.443 1.724-0.021 2.505-1.244 2.161-3.047 3.948-5.208 5.208-2.167 1.245-4.631 1.907-7.115 1.907l0.068 0.025zM13.672 9.251c-1.489 1.38-2.421 3.348-2.421 5.541 0 1.369 0.369 2.656 1.009 3.771 0.365 0.62 0.563 1.317 0.563 2.083 0 1.661-0.979 3.104-2.385 3.767 1.948 0.599 4.104 0.416 6.016-0.683 1.197-0.703 2.12-1.661 2.76-2.765 0.36-0.62 0.896-1.161 1.547-1.527 1.443-0.839 3.188-0.697 4.469 0.183-0.443-1.98-1.683-3.787-3.589-4.865-1.171-0.681-2.479-1.005-3.76-1.005-0.719 0-1.437-0.197-2.077-0.556-1.443-0.839-2.204-2.407-2.063-3.969l-0.057 0.016zM8.64 23.156c-0.885 0-1.713-0.479-2.161-1.255-1.255-2.161-1.905-4.62-1.905-7.109 0-7.844 6.375-14.224 14.229-14.224 1.369 0 2.495 1.12 2.495 2.505 0 1.38-1.125 2.5-2.505 2.5-5.084 0-9.213 4.135-9.213 9.219 0 1.609 0.421 3.203 1.233 4.604 0.219 0.375 0.333 0.807 0.333 1.249 0 1.381-1.119 2.505-2.509 2.505v0.005z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib bathasu';
-->
