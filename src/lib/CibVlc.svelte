<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib vlc';
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
    d="M15.855 17.953c5.009 0 6.473-1.797 6.755-2.235l-1.812-5.781c-0.485 0.459-1.771 1.251-4.912 1.251-3.052 0-4.249-0.756-4.692-1.215l-1.849 5.896c0.301 0.485 1.672 2.084 6.511 2.084zM15.891 5.079c1.088-0.016 2.167-0.245 3.167-0.677l-1.145-3.647c-0.095-0.26-0.287-0.468-0.543-0.583 0 0-0.151-0.172-1.328-0.172s-1.405 0.183-1.405 0.183c-0.256 0.104-0.453 0.312-0.548 0.572l-1.176 3.756c0.952 0.353 1.957 0.547 2.979 0.568zM30.12 31.093c0.005-0.072 0-0.145-0.021-0.213l-3.115-10.177c-0.115-0.333-0.421-0.563-0.776-0.572h-2.219l0.271 0.848c-0.323 0.652-1.984 3.177-8.405 3.177-6.136 0-7.772-2.307-8.147-3.077l0.297-0.948h-2.213c-0.355 0.009-0.661 0.239-0.776 0.572l-3.115 10.177c-0.021 0.063-0.027 0.131-0.021 0.199l-0.005 0.025c0.005 0.104 0.016 0.203 0.032 0.303 0.057 0.339 0.344 0.588 0.681 0.593h26.824c0.343-0.005 0.629-0.255 0.681-0.593 0.016-0.1 0.027-0.199 0.032-0.303z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib vlc';
-->
