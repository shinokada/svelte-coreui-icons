<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib buddy';
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
    d="M28.932 7.078l-11.672-6.74c-0.776-0.453-1.74-0.453-2.521 0l-11.672 6.734c-0.781 0.453-1.26 1.286-1.26 2.187v13.479c0 0.896 0.479 1.729 1.26 2.182l11.672 6.74c0.781 0.448 1.74 0.448 2.521 0l11.677-6.74c0.776-0.453 1.26-1.281 1.26-2.182v-13.479c0-0.901-0.484-1.734-1.26-2.182zM19 17.411l-5.073 5.073-1.802-1.802 5.073-5.073-5.073-5.073 1.802-1.802 6.875 6.875z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib buddy';
-->
