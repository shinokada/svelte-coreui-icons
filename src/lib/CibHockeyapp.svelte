<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib hockeyapp';
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
    d="M29.057 20.005c0.099-0.078 0.245-0.010 0.26 0.109 0.005 0.073 0.016 0.151 0.016 0.229 0 2.115-4.443 4.99-13.333 4.99s-13.333-2.875-13.333-4.984c0-0.073 0.010-0.151 0.016-0.219 0.016-0.125 0.161-0.188 0.26-0.109 2.208 1.583 6.557 2.943 13.057 2.943 6.51 0 10.859-1.359 13.057-2.958zM16 18.891c-7.208 0-11.984-1.641-14.318-3.531-0.078-0.068-0.203-0.042-0.25 0.052-0.125 0.234-0.182 0.49-0.182 0.745 0 2.333 4.917 5.448 14.75 5.448s14.75-3.104 14.75-5.448c0-0.26-0.057-0.51-0.182-0.745-0.047-0.094-0.172-0.12-0.25-0.052-2.333 1.891-7.109 3.531-14.318 3.531zM32 11.25c0 2.693-5.333 6.281-16 6.281s-16-3.589-16-6.281c0-2.688 5.333-4.583 16-4.583s16 1.896 16 4.583zM27.333 10.828c0-1.354-3.776-2.125-11.333-2.125s-11.333 0.776-11.333 2.125c0 1.349 3.776 3.307 11.333 3.307s11.333-1.958 11.333-3.307z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib hockeyapp';
-->
