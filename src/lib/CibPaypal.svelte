<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib paypal';
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
    d="M10.962 18.494c-0.219 1.2-1.087 6.794-1.344 8.375-0.019 0.113-0.063 0.156-0.188 0.156h-4.662c-0.475 0-0.819-0.412-0.756-0.869l3.663-23.244c0.094-0.6 0.631-1.056 1.25-1.056 9.519 0 10.319-0.231 12.75 0.713 3.756 1.456 4.1 4.969 2.75 8.769-1.344 3.913-4.531 5.594-8.756 5.644-2.712 0.044-4.344-0.438-4.706 1.512zM26.319 9.5c-0.113-0.081-0.156-0.113-0.188 0.081-0.125 0.712-0.319 1.406-0.55 2.1-2.494 7.113-9.406 6.494-12.781 6.494-0.381 0-0.631 0.206-0.681 0.587-1.412 8.775-1.694 10.606-1.694 10.606-0.063 0.444 0.219 0.806 0.662 0.806h3.969c0.538 0 0.981-0.394 1.088-0.931 0.044-0.337-0.069 0.381 0.9-5.706 0.288-1.375 0.894-1.231 1.831-1.231 4.438 0 7.9-1.8 8.931-7.019 0.406-2.175 0.288-4.463-1.487-5.788z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib paypal';
-->
