<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib bit';
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
    d="M16 32c-8.839 0-16-7.161-16-16s7.161-16 16-16c8.839 0 16 7.161 16 16s-7.161 16-16 16zM14.474 17.427c0-1.724-1.016-2.693-2.479-2.693-0.453 0-0.849 0.094-1.146 0.297v-2.297c0-0.427-0.266-0.646-0.802-0.646s-0.802 0.219-0.802 0.646v6.047c0 0.406 0 0.802 0.552 1.115 0.479 0.271 1.099 0.406 1.771 0.406 1.865 0 2.906-1.125 2.906-2.875zM10.849 18.828v-2.563c0.219-0.161 0.479-0.245 0.75-0.24 0.745 0 1.234 0.552 1.234 1.505 0 0.948-0.479 1.474-1.255 1.474-0.276 0-0.526-0.057-0.729-0.182zM17.474 13.156c0-0.552-0.396-0.922-0.948-0.922s-0.943 0.37-0.943 0.922c0 0.547 0.391 0.932 0.943 0.932s0.948-0.385 0.948-0.932zM17.328 15.38c0-0.432-0.26-0.646-0.802-0.646-0.536 0-0.802 0.214-0.802 0.646v4.25c0 0.427 0.266 0.646 0.802 0.646 0.542 0 0.802-0.219 0.802-0.646zM22.182 18.839c-0.099 0-0.182 0.026-0.276 0.047-0.109 0.026-0.24 0.063-0.37 0.063-0.203 0-0.359-0.073-0.443-0.24-0.109-0.203-0.109-0.516-0.109-0.734v-1.792h1.005c0.432 0 0.646-0.219 0.646-0.672s-0.214-0.672-0.646-0.672h-1.005v-1.052c0-0.432-0.26-0.646-0.802-0.646-0.536 0-0.802 0.214-0.802 0.646v1.052h-0.417c-0.432 0-0.646 0.219-0.646 0.672s0.214 0.672 0.646 0.672h0.417v1.792c0 0.552 0.026 1.068 0.266 1.5 0.26 0.479 0.776 0.823 1.641 0.823 0.464 0 0.922-0.109 1.182-0.26 0.229-0.135 0.286-0.302 0.286-0.469 0-0.26-0.13-0.729-0.573-0.729z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib bit';
-->
