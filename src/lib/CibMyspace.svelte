<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib myspace';
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
    d="M26.407 16.364c2.807 0 5.088-2.271 5.088-5.072 0-2.803-2.281-5.057-5.088-5.057-2.813 0-5.095 2.281-5.095 5.077 0 2.803 2.281 5.084 5.095 5.084zM14.932 17.307c2.532 0 4.584-2.047 4.584-4.567 0-2.521-2.052-4.568-4.584-4.568-2.531 0-4.577 2.063-4.577 4.583 0 2.521 2.047 4.579 4.577 4.579zM4.531 18.151c2.281 0 4.125-1.839 4.125-4.109s-1.859-4.109-4.14-4.109c-2.276 0-4.115 1.839-4.115 4.12 0 2.265 1.849 4.104 4.125 4.104zM4.531 19.093c-2.609 0-4.531 2.287-4.531 4.656v1.6c0 0.224 0.183 0.411 0.412 0.411h8.239c0.229 0 0.417-0.187 0.417-0.411v-1.6c0-2.369-1.917-4.667-4.532-4.667zM14.932 18.344c-2.905 0-5.036 2.557-5.036 5.187v1.776c0 0.251 0.203 0.459 0.459 0.459h9.161c0.249 0 0.453-0.203 0.453-0.459v-1.776c0-2.629-2.131-5.187-5.037-5.187zM26.407 17.521c-3.229 0-5.6 2.839-5.6 5.765v1.968c0 0.281 0.229 0.511 0.511 0.511h10.172c0.281 0 0.511-0.229 0.511-0.511v-1.968c0-2.927-2.364-5.765-5.593-5.765z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib myspace';
-->
