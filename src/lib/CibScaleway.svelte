<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib scaleway';
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
    d="M22.146 14.813v7.625c-0.042 1.156-0.911 2.109-2.052 2.255h-5.333c-0.891-0.063-1.62-0.74-1.745-1.625-0.010-0.083-0.010-0.161 0-0.24 0.005-1.005 0.823-1.813 1.823-1.813h2.323c0.734 0 1.333-0.599 1.333-1.333v-4.828c-0.005-0.922 0.661-1.708 1.573-1.854h0.224c1.016-0.016 1.849 0.797 1.854 1.813zM13.531 17.135v-4.786c0-0.74 0.599-1.333 1.333-1.333h2.469c1.010 0 1.828-0.818 1.828-1.828 0.005-0.078 0.005-0.151 0-0.229-0.161-0.917-0.953-1.589-1.88-1.599h-5.281c-1.141 0.146-2.021 1.068-2.104 2.214v7.599c0 1.010 0.818 1.828 1.823 1.828h0.281c0.901-0.161 1.547-0.953 1.531-1.865zM29.531 11.411v15.255c-0.328 2.875-2.646 5.109-5.531 5.333h-10.104c-6.307-0.005-11.417-5.12-11.417-11.427v-14.521c0-3.344 2.714-6.052 6.052-6.052h9.573c6.307 0 11.417 5.109 11.417 11.411zM25.88 11.411c-0.005-4.281-3.479-7.75-7.76-7.76h-9.589c-1.328-0.005-2.406 1.073-2.396 2.401v14.521c0.021 4.271 3.484 7.724 7.76 7.734h9.917c1.047-0.135 1.88-0.938 2.052-1.974z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib scaleway';
-->
