<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib adobe after effects';
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
    d="M0 0.401v31.198h32v-31.198zM1.333 1.734h29.333v28.531h-29.333zM9.047 18.068l-1.057 3.979c-0.021 0.109-0.068 0.151-0.198 0.151h-1.958c-0.13 0-0.151-0.047-0.13-0.198l3.786-13.245c0.063-0.24 0.109-0.432 0.13-1.094 0-0.089 0.042-0.135 0.109-0.135h2.797c0.089 0 0.13 0.026 0.151 0.135l4.245 14.359c0.021 0.109 0 0.172-0.109 0.172h-2.198c-0.109 0-0.177-0.036-0.198-0.125l-1.099-4.005h-4.271zM12.786 15.901c-0.375-1.474-1.281-4.708-1.609-6.266h-0.021c-0.286 1.557-1.005 4.198-1.557 6.266zM19.932 17.266c0.026 1.807 0.88 3.016 2.906 3.016 0.792 0 1.469-0.104 2.172-0.417 0.089-0.042 0.156-0.016 0.156 0.094v1.672c0 0.13-0.042 0.198-0.135 0.266-0.703 0.349-1.578 0.505-2.677 0.505-3.521 0-4.839-2.594-4.839-5.5 0-3.146 1.625-5.719 4.49-5.719 2.901 0 3.911 2.443 3.911 4.422 0 0.641-0.047 1.167-0.109 1.411-0.026 0.109-0.068 0.146-0.177 0.167-0.266 0.047-1.057 0.089-2.224 0.089h-3.474zM22.641 15.432c0.682 0 0.922 0 0.99-0.021 0-0.089 0.021-0.167 0.021-0.229 0-0.729-0.354-2.063-1.74-2.063-1.276 0-1.828 1.125-1.958 2.313z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib adobe after effects';
-->
