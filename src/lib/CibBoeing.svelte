<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib boeing';
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
    d="M9.208 23.135c-1.818 0.005-3.589-0.604-5.016-1.734 1.609-3.62 4.875-8.474 9.333-13.219 3.464 2.177 4.76 6.599 3.016 10.302-1.417-0.651-2.734-1.474-3.854-2.505l2.443 4.583c-1.531 1.646-3.677 2.578-5.922 2.573zM1.104 15.036c0-2.146 0.854-4.208 2.375-5.729s3.578-2.375 5.729-2.375c1.198 0 2.333 0.266 3.365 0.729-4.391 3.88-7.792 8.391-9.807 12.292-1.078-1.411-1.661-3.141-1.661-4.917zM17.563 18.922c0.563-1.219 0.854-2.542 0.854-3.885 0-3.198-1.635-6.021-4.115-7.672 1.521-1.563 3.115-3.047 4.776-4.453-1.969 1.167-3.844 2.49-5.599 3.964-3.917-2.042-8.729-1.021-11.479 2.437-2.745 3.458-2.646 8.38 0.234 11.729-1.766 3.818-2.073 6.885-0.521 7.917 1.667 1.109 5.281-0.901 7.453-4.177 0 0-3.354 3.031-5.203 2.333-1.135-0.427-1.135-2.161-0.203-4.656 1.578 1.161 3.49 1.786 5.448 1.786 2.526 0 4.807-1.016 6.469-2.656l0.328 0.615c4.010-0.328 15.995-0.641 15.995-0.641 0-0.578-7.932-0.057-14.443-2.641z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib boeing';
-->
