<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib wordpress';
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
    d="M28.625 9.099c1.12 2.052 1.755 4.401 1.755 6.901 0 5.307-2.87 9.943-7.146 12.432l4.391-12.703c0.823-2.052 1.094-3.693 1.094-5.151 0-0.542-0.036-1.042-0.094-1.479zM17.984 9.24c0.865-0.042 1.641-0.141 1.641-0.141 0.776-0.099 0.688-1.24-0.089-1.198 0 0-2.339 0.177-3.839 0.177-1.417 0-3.802-0.198-3.802-0.198-0.776-0.042-0.88 1.141-0.099 1.182 0 0 0.719 0.078 1.5 0.12l2.24 6.135-3.161 9.443-5.234-15.563c0.865-0.036 1.646-0.13 1.646-0.13 0.776-0.099 0.688-1.24-0.089-1.198 0 0-2.328 0.187-3.833 0.187-0.266 0-0.583-0.010-0.917-0.021 2.599-3.839 7.031-6.417 12.052-6.417 3.745 0 7.151 1.427 9.714 3.776-0.063 0-0.12-0.010-0.188-0.010-1.411 0-2.417 1.229-2.417 2.552 0 1.188 0.688 2.193 1.417 3.375 0.547 0.958 1.182 2.193 1.182 3.969 0 1.219-0.469 2.656-1.094 4.641l-1.432 4.776-5.198-15.479zM16 30.38c-1.411 0-2.776-0.203-4.063-0.583l4.313-12.542 4.422 12.115c0.031 0.073 0.068 0.135 0.104 0.198-1.495 0.526-3.099 0.813-4.776 0.813zM1.615 16c0-2.083 0.448-4.068 1.245-5.854l6.859 18.802c-4.792-2.333-8.104-7.255-8.104-12.948zM16 0c-8.818 0-16 7.182-16 16s7.182 16 16 16c8.818 0 16-7.182 16-16s-7.182-16-16-16z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib wordpress';
-->
