<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib osi';
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
    d="M0.5 16.653c0.144-8.488 6.087-14.528 13.363-15.506 8.675-1.163 15.975 4.738 17.375 12.569 1.331 7.425-2.75 14.375-9.475 17.125-0.581 0.237-0.9 0.106-1.125-0.481-1.113-2.894-2.225-5.79-3.337-8.688-0.194-0.506-0.063-0.825 0.438-1.050 1.512-0.688 2.456-1.838 2.706-3.488 0.19-1.223-0.136-2.471-0.9-3.445s-1.898-1.587-3.132-1.693c-2.438-0.213-4.488 1.481-4.844 3.731-0.325 2.063 0.694 3.981 2.619 4.856 0.6 0.275 0.719 0.538 0.488 1.15-1.119 2.913-2.238 5.827-3.356 8.744-0.163 0.431-0.519 0.581-0.969 0.406-3.288-1.269-6.338-3.813-8.175-7.438-1.556-3.075-1.575-5.481-1.675-6.794zM1.806 16.534c0.025 0.413 0.038 0.894 0.081 1.381 0.394 4.494 3.1 8.969 8.188 11.444 0.2 0.094 0.275 0.050 0.35-0.144 0.931-2.444 1.869-4.888 2.813-7.331 0.081-0.206 0.037-0.3-0.15-0.419-1.975-1.244-2.956-3.031-2.85-5.375 0.063-1.35 0.581-2.531 1.488-3.519 1.875-2.044 4.813-2.488 7.219-1.1 1.989 1.147 3.101 3.371 2.825 5.65-0.225 1.912-1.206 3.369-2.856 4.362-0.169 0.1-0.219 0.181-0.144 0.375 0.95 2.45 1.892 4.902 2.825 7.356 0.075 0.194 0.15 0.237 0.35 0.144 2.219-1.037 4.075-2.519 5.506-4.5 2.175-3.012 3.069-6.369 2.644-10.063-0.856-7.344-7.462-13.425-15.969-12.375-6.631 0.813-12.206 6.406-12.319 14.113z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib osi';
-->
