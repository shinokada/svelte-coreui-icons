<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib clockify';
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
    d="M19.974 10.995l7.25-7.349 2.073 2.104-7.25 7.349-2.078-2.104zM17.036 18.51c-0.688 0-1.344-0.276-1.823-0.771s-0.745-1.156-0.745-1.844c0-1.443 1.146-2.615 2.563-2.615 1.422 0 2.573 1.172 2.573 2.615 0 0.688-0.266 1.349-0.75 1.844-0.479 0.49-1.135 0.771-1.818 0.771zM29.328 26.104l-2.073 2.104-7.25-7.354 2.078-2.099zM17.115 27.203c1.417 0 2.818-0.276 4.125-0.818l3.542 3.594c-2.339 1.323-4.979 2.021-7.667 2.021-8.719 0-15.781-7.161-15.781-16s7.068-16 15.781-16c2.755 0 5.349 0.719 7.599 1.979l-3.479 3.536c-1.307-0.542-2.708-0.818-4.12-0.818-6.104 0-11.052 5.042-11.052 11.255s4.948 11.25 11.052 11.25z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib clockify';
-->
