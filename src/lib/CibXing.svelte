<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib xing';
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
    d="M24.25 0c-0.688 0-0.99 0.432-1.234 0.88 0 0-9.943 17.63-10.271 18.208 0.021 0.031 6.557 12.031 6.557 12.031 0.229 0.411 0.583 0.88 1.292 0.88h4.604c0.281 0 0.5-0.104 0.62-0.292 0.115-0.203 0.115-0.464-0.016-0.719l-6.505-11.885c-0.005-0.010-0.005-0.021 0-0.031l10.224-18.063c0.125-0.255 0.125-0.521 0.005-0.714s-0.333-0.297-0.609-0.297zM4.865 6.318c-0.281 0-0.516 0.099-0.63 0.292-0.12 0.198-0.104 0.453 0.026 0.708l3.12 5.396c0.005 0.016 0.005 0.026 0 0.031l-4.901 8.656c-0.13 0.25-0.125 0.51 0 0.703 0.115 0.193 0.318 0.313 0.599 0.313h4.615c0.693 0 1.021-0.464 1.26-0.885l4.979-8.813-3.172-5.542c-0.229-0.422-0.578-0.88-1.281-0.88h-4.615z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib xing';
-->
