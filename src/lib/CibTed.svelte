<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib ted';
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
    d="M3.24 13.182h-3.24v-2.964h10.042v2.964h-3.24v8.599h-3.563zM10.594 10.219h9.745v2.964h-6.182v1.443h6.182v2.75h-6.182v1.443h6.182v2.964h-9.745zM24.5 18.823h1.396c2.219 0 2.542-1.802 2.542-2.891 0-0.724-0.24-2.75-2.818-2.75h-1.141v5.641zM20.938 10.219h5.849c3.854 0 5.214 2.849 5.214 5.76 0 3.547-1.88 5.802-5.911 5.802h-5.151z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib ted';
-->
