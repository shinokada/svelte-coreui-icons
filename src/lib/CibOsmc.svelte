<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib osmc';
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
    d="M30.359 16.005c0 7.911-6.443 14.354-14.359 14.354-7.911-0.005-14.349-6.443-14.349-14.354 0-7.922 6.438-14.359 14.354-14.359 7.911 0 14.354 6.438 14.354 14.359zM30.745 9.771c-0.797-1.901-1.964-3.625-3.427-5.083-1.453-1.458-3.182-2.625-5.083-3.427-1.969-0.839-4.089-1.266-6.229-1.26-4.245-0.010-8.318 1.677-11.313 4.688-1.464 1.458-2.625 3.188-3.427 5.083-0.844 1.979-1.26 4.068-1.26 6.234 0 2.161 0.417 4.255 1.255 6.229 0.797 1.901 1.964 3.625 3.427 5.083 2.995 3.005 7.068 4.688 11.313 4.682 2.156 0 4.255-0.427 6.229-1.255 1.901-0.802 3.63-1.964 5.083-3.427 3.005-3 4.693-7.073 4.682-11.313 0-2.167-0.411-4.255-1.25-6.234zM11.422 19.51v-7.161l3.432 3.578zM9.771 8.396v15.229l10.818-11.276v9.026c0 0.453 0.375 0.823 0.823 0.823 0.458 0 0.833-0.37 0.833-0.828v-12.99l-6.24 6.359z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib osmc';
-->
