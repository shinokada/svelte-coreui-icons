<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib hatena bookmark';
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
    d="M27.292 0c2.604 0 4.708 2.104 4.708 4.708v22.584c0 2.604-2.104 4.708-4.708 4.708h-22.584c-2.604 0-4.708-2.104-4.708-4.708v-22.584c0-2.604 2.104-4.708 4.708-4.708zM22.355 19.292c-1.043 0-1.881 0.844-1.881 1.88 0 1.041 0.839 1.885 1.881 1.885 1.041 0 1.88-0.86 1.88-1.901 0-1.036-0.839-1.875-1.88-1.875zM11.479 22.995c1.6 0 2.74-0.057 3.443-0.156 0.699-0.115 1.297-0.297 1.761-0.552 0.599-0.308 1.036-0.751 1.359-1.317 0.319-0.568 0.48-1.224 0.48-1.975 0-1.041-0.281-1.869-0.839-2.495-0.563-0.64-1.323-0.979-2.323-1.057 0.88-0.24 1.541-0.599 1.943-1.083 0.416-0.459 0.619-1.1 0.619-1.896 0-0.641-0.135-1.183-0.4-1.683-0.281-0.479-0.657-0.86-1.177-1.156-0.459-0.261-0.98-0.423-1.62-0.543-0.62-0.099-1.719-0.161-3.297-0.161h-3.891v13.985h3.943zM12.464 17.416c0.937 0 1.577 0.115 1.916 0.349 0.36 0.24 0.521 0.661 0.521 1.24 0 0.541-0.183 0.921-0.557 1.14-0.365 0.24-1.021 0.339-1.923 0.339h-1.343v-3.063h1.4zM24.005 18.36v-9.417h-3.281v9.417zM11.901 12.104c0.948 0 1.577 0.109 1.905 0.323 0.329 0.213 0.491 0.579 0.491 1.104 0 0.511-0.172 0.865-0.516 1.073-0.355 0.208-1 0.313-1.937 0.313h-0.761v-2.813z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib hatena bookmark';
-->
