<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib salesforce';
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
    d="M13.339 7.219c1-1.057 2.464-1.74 4.063-1.74 2.078 0 3.938 1.203 4.917 2.943 0.844-0.401 1.802-0.604 2.802-0.604 3.802 0 6.88 3.12 6.88 6.964 0 3.839-3.083 6.958-6.901 6.958-0.458 0-0.917-0.057-1.359-0.141-0.859 1.563-2.5 2.604-4.401 2.604-0.802 0-1.542-0.203-2.198-0.5-0.88 2.057-2.922 3.495-5.302 3.495-2.479 0-4.599-1.557-5.401-3.755-0.359 0.078-0.719 0.099-1.099 0.099-2.938 0-5.339-2.401-5.339-5.401 0-2 1.078-3.74 2.677-4.677-0.339-0.76-0.521-1.604-0.521-2.464 0-3.438 2.802-6.198 6.203-6.198 2.042 0 3.797 0.938 4.958 2.401z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib salesforce';
-->
