<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib emlakjet';
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
    d="M20.864 21.473v-0.323c-0.088-1.281-0.697-2.468-1.687-3.291-0.964-0.887-2.256-1.287-3.541-1.209-2.491 0.161-4.5 2.333-4.5 4.823 0 1.048 0.156 2.089 0.561 3.292h-5.629v-15.505l9.891-6.828 9.979 6.828v15.589h-5.631c0.24-0.885 0.563-2.251 0.563-3.376zM27.625 7.812l-11.021-7.629c-0.401-0.245-0.885-0.245-1.208 0l-11.099 7.629c-0.324 0.161-0.485 0.485-0.485 0.885v17.276c0 0.641 0.485 1.125 1.125 1.125h8.292c0.625 0.016 1.14-0.5 1.125-1.125 0-0.077 0-0.239-0.084-0.323l-0.077-0.239c-0.401-0.964-0.887-2.172-0.887-3.376v-0.239c-0.077-0.724 0.163-1.448 0.641-1.933 0.468-0.547 1.135-0.891 1.855-0.963 0.724-0.079 1.364 0.161 1.927 0.645 0.563 0.48 0.885 1.125 0.968 1.849v0.24c0.079 1.604-0.968 3.937-1.129 4.176l-1.527 2.896-0.239-0.484c-0.163-0.24-0.401-0.484-0.647-0.563-0.239-0.077-0.563-0.077-0.801 0.079-0.24 0.161-0.485 0.4-0.563 0.645-0.084 0.24-0.084 0.563 0.077 0.803l1.209 2.249c0.161 0.323 0.561 0.563 0.963 0.563s0.808-0.24 0.964-0.563l2.416-4.5h7.641c0.625 0.016 1.14-0.495 1.125-1.125v-17.115c-0.079-0.4-0.24-0.724-0.563-0.885z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib emlakjet';
-->
