<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib showpad';
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
    d="M32 16v-0.453l-0.042-0.318c-0.354-3.443-3.068-6.161-6.505-6.521l-0.318-0.016h-0.068l-0.359-0.010c-1.943-0.010-3.802 0.76-5.177 2.13l-2.464 2.479 1.797 1.813 1.802-1.797h-0.016l0.667-0.682c0.896-0.896 2.109-1.401 3.375-1.396h0.266l0.214 0.010c2.25 0.229 4.031 2.005 4.266 4.255v0.974c-0.172 1.635-1.182 3.068-2.667 3.786l-0.036 0.026-0.135 0.052-0.094 0.042-0.078 0.036-0.146 0.057h-0.042c-1.719 0.594-3.625 0.156-4.922-1.12l-0.667-0.667-4.49-4.484-7.177-7.182-8.984 8.984 8.984 8.984 1.786-1.797 4.495-4.495-1.786-1.797-4.495 4.49-5.385-5.385 5.385-5.385 2.698 2.693 7.849 7.854c1.974 1.974 4.901 2.646 7.536 1.734l0.068-0.016 0.214-0.094 0.13-0.052 0.146-0.052 0.214-0.094 0.068-0.042c2.26-1.104 3.792-3.297 4.052-5.802v-0.010l0.026-0.323v-0.411z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib showpad';
-->
