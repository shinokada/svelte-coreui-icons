<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib zillow';
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
    d="M23.177 24.073c-9.911 0.594-20.682 4.182-21.818 4.682l1.318-3.719c3.359-1.557 11.698-4.625 21.979-5.359-0.198 0.76-1.281 3.563-1.5 4.38zM26.708 14.063c0 0-0.484 1.021-0.948 2.417-3.938 0.24-10.177 1.542-13.219 2.641 1.583-1.438 11.583-11.479 11.583-11.479 3.854 2.641 7.875 5.901 7.875 5.901l-5.292 0.526zM3.307 14.505c2.198-1 8.354-2.865 14.245-4.245 0 0-11.328 10.458-14.479 13.703l2.604-7.042c-2.026 0.297-2.917 0.422-5.677 1l3.307-3.401zM17.438 3.26c0.979 0.479 4.604 2.938 5.896 3.849-4.13 0.099-12.182 1.88-15.536 3 2.75-2.089 7.87-6.036 9.641-6.865z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib zillow';
-->
