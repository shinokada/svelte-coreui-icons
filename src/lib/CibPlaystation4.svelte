<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib playstation4';
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
    d="M16.407 17.573v-3.183c0-0.651 0.301-1.115 0.948-1.115h3.989c0.020 0 0.047-0.021 0.047-0.047v-0.636c0-0.005 0-0.009-0.005-0.015h-4.88c-1.057 0.135-1.573 0.875-1.573 1.812v3.183c0 0.64-0.312 1.109-0.948 1.109h-4.203c-0.027 0-0.047 0.015-0.047 0.047v0.635c0 0.027 0.011 0.048 0.025 0.052h4.781c1.245-0.036 1.86-0.828 1.86-1.848zM0.031 19.421h1.401c0.021-0.009 0.037-0.025 0.037-0.057v-2.025c0-0.651 0.364-1.099 0.9-1.099h5.767c1.296 0 1.927-0.797 1.927-1.844 0-0.943-0.516-1.677-1.573-1.812h-8.479c0 0.004-0.011 0.009-0.011 0.015v0.636c0 0.031 0.016 0.047 0.047 0.047h7.599c0.647 0 0.948 0.464 0.948 1.109s-0.301 1.115-0.948 1.115h-6.009c-0.933 0-1.636 0.792-1.636 1.833v2.025c0 0.027 0.016 0.048 0.036 0.052zM21.364 18.688h7.657c0.020 0 0.041 0.015 0.041 0.031v0.645c0 0.032 0.020 0.048 0.041 0.048h1.38c0.027 0 0.052-0.016 0.052-0.048v-0.635c0-0.027 0.027-0.047 0.052-0.047h1.371c0.031 0 0.047-0.027 0.047-0.047v-0.647c0-0.025-0.011-0.052-0.047-0.052h-1.371c-0.025 0-0.052-0.020-0.052-0.041v-4.62c0-0.375-0.135-0.615-0.375-0.697h-0.396c-0.125 0.036-0.26 0.093-0.405 0.176l-8.24 5.089c-0.323 0.203-0.432 0.427-0.355 0.593 0.063 0.141 0.251 0.245 0.604 0.245zM22.563 17.839l6.385-3.953c0.041-0.031 0.12-0.021 0.12 0.068v3.948c0 0.025-0.021 0.047-0.041 0.047h-6.428c-0.052 0-0.077-0.016-0.083-0.031-0.011-0.032 0.005-0.057 0.047-0.079z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib playstation4';
-->
