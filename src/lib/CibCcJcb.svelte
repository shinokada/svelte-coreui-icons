<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib cc jcb';
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
    d="M23.972 15.35v-1.794c2.289 0 2.139 0.011 2.139 0.011 0.406 0.072 0.739 0.406 0.739 0.889 0 0.489-0.333 0.806-0.739 0.878-0.067 0.022-0.183 0.017-2.139 0.017zM26.35 16.472c-0.156-0.039-0.183-0.028-2.378-0.028v1.944c2.2 0 2.222 0.011 2.378-0.028 0.417-0.083 0.75-0.444 0.75-0.944 0-0.483-0.333-0.861-0.75-0.944zM32 6.222v19.556c0 1.472-1.194 2.667-2.667 2.667h-26.667c-1.472 0-2.667-1.194-2.667-2.667v-19.556c0-1.472 1.194-2.667 2.667-2.667h26.667c1.472 0 2.667 1.194 2.667 2.667zM10.111 12.461h-3.167c0 3.728 0.594 6.094-1.989 6.094-1.083 0-2.156-0.317-3.178-0.822v1.556c1.667 0.461 3.778 0.461 3.778 0.461 5.439 0 4.556-2.65 4.556-7.289zM20.028 12.711c-3.522-0.889-9.167-0.828-9.167 3.295 0 4.283 6.011 4.089 9.167 3.289v-1.572c-2.645 1.372-5.972 1.222-5.972-1.722s3.322-3.089 5.972-1.733zM30.222 17.694c0-1.028-0.917-1.694-2.111-1.778v-0.044c1.083-0.15 1.683-0.861 1.683-1.678 0-1.056-0.872-1.667-2.056-1.722 0 0 0.35-0.017-6.683-0.017v7.083h6.817c1.35 0.006 2.35-0.717 2.35-1.844z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib cc jcb';
-->
