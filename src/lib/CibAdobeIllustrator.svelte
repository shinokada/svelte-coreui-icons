<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib adobe illustrator';
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
    d="M0 0.401v31.198h32v-31.198zM1.333 1.734h29.333v28.531h-29.333zM11.099 18.068l-1.057 3.995c-0.021 0.115-0.063 0.135-0.193 0.135h-1.958c-0.135 0-0.156-0.042-0.135-0.193l3.786-13.26c0.068-0.24 0.109-0.453 0.13-1.115 0-0.089 0.047-0.13 0.115-0.13h2.792c0.089 0 0.135 0.021 0.156 0.13l4.245 14.396c0.026 0.109 0 0.172-0.109 0.172h-2.198c-0.115 0-0.177-0.026-0.198-0.115l-1.104-4.016h-4.276zM14.818 15.901c-0.375-1.474-1.255-4.703-1.583-6.266h-0.026c-0.281 1.557-0.99 4.198-1.536 6.266zM20.818 8.49c0-0.859 0.594-1.365 1.365-1.365 0.813 0 1.365 0.552 1.365 1.365 0 0.88-0.573 1.365-1.391 1.365-0.797 0-1.344-0.484-1.344-1.365zM20.969 11.521c0-0.104 0.042-0.146 0.151-0.146h2.094c0.12 0 0.161 0.042 0.161 0.156v10.526c0 0.109-0.021 0.151-0.156 0.151h-2.063c-0.135 0-0.177-0.063-0.177-0.172v-10.516z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib adobe illustrator';
-->
