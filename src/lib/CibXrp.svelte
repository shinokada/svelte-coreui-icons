<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib xrp';
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
    d="M7.36 3.937c-2.595 0-4.704 2.104-4.699 4.703v3.412c0 1.495-1.167 2.735-2.661 2.823l0.041 0.751-0.041 0.749c1.495 0.089 2.667 1.328 2.661 2.828v3.928c-0.005 2.719 2.193 4.921 4.907 4.932v-1.5c-1.88 0-3.407-1.527-3.412-3.412v-3.948c0.005-1.432-0.708-2.776-1.891-3.577 1.183-0.808 1.891-2.147 1.891-3.579v-3.407c0.011-1.765 1.437-3.192 3.204-3.203h0.583v-1.5zM24.079 3.937v1.5h0.583c1.76 0.005 3.188 1.437 3.183 3.203v3.407c0 1.432 0.708 2.771 1.891 3.579-1.183 0.801-1.896 2.145-1.891 3.577v3.948c-0.005 1.885-1.532 3.412-3.412 3.412v1.5c2.713-0.011 4.912-2.213 4.907-4.932v-3.933c0-1.495 1.167-2.733 2.661-2.823l-0.041-0.749 0.041-0.751c-1.495-0.083-2.661-1.328-2.661-2.823v-3.416c0.005-2.589-2.088-4.693-4.677-4.699zM8.339 9.969l4.635 4.348c1.724 1.557 4.349 1.557 6.073 0l4.636-4.348h-2.224l-3.537 3.285c-1.083 1-2.76 1-3.843 0l-3.516-3.285zM15.812 16.484c-1.057 0.047-2.063 0.464-2.839 1.177l-4.656 4.369h2.224l3.557-3.328c1.089-1 2.756-1 3.844 0l3.536 3.328h2.224l-4.656-4.369c-0.88-0.807-2.041-1.229-3.235-1.177z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib xrp';
-->
