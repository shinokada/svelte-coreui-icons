<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib homify';
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
    d="M27.333 14.083v0.068l-0.005 0.068c-0.12 3.104-0.077 15.145-0.077 15.765 0.004 1.437-1.12 2.589-2.157 1.709l-9.437-7.376c-2.963 3.073-5.807 5.995-6.411 6.568-1.324 1.26-2.412-1.765-1.412-2.412 0.088-0.052 3.005-2.599 6.235-5.395l-6.989-5.464c-0.605-0.475-0.839-1.26-0.491-1.677 0.12-0.115 0.281-0.177 0.443-0.172 0.073 0.005 0.152 0.021 0.22 0.052 2.161 0.959 5.353 3.323 8.536 5.771 3.312-2.869 6.495-5.588 6.911-5.817 0.516-0.287 0.657 0.469 0.48 0.688-0.172 0.219-2.932 3.099-5.953 6.239 2.973 2.308 5.803 4.516 7.583 5.511l0.297-14.156c-0.235-0.276-7.208-9.552-7.964-10.333-1.208 1.041-7.525 8.151-7.848 8.459 1.443 0.145 7.568 0.511 11.427 0.911 0.975 0.095 1.625 0.808-0.464 0.792l-15.015-0.025c-0.235-0.005-0.443-0.147-0.532-0.355-0.088-0.208-0.036-0.448 0.131-0.609 0.079-0.079 10.869-11.896 11.776-12.645 0.203-0.172 0.421-0.256 0.645-0.245 0.308 0.011 0.557 0.193 0.657 0.303 0.113 0.104 5.801 7.916 8.577 11.733 0.661 0.901 0.833 1.516 0.839 2z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib homify';
-->
