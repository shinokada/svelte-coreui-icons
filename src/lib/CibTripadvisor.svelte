<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib tripadvisor';
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
    d="M30.683 12.708c0.375-1.609 1.568-3.219 1.568-3.219h-5.349c-3.005-1.943-6.647-2.968-10.688-2.968-4.187 0-7.968 1.041-10.953 3h-5.009c0 0 1.176 1.583 1.556 3.181-0.973 1.344-1.556 2.964-1.556 4.745 0 4.416 3.599 8.011 8.015 8.011 2.527 0 4.765-1.183 6.245-3.005l1.697 2.552 1.724-2.584c0.761 0.985 1.761 1.781 2.937 2.324 1.943 0.88 4.125 0.979 6.125 0.239 4.141-1.536 6.26-6.161 4.74-10.301-0.276-0.74-0.641-1.401-1.079-1.98zM26.453 23.473c-1.599 0.595-3.339 0.527-4.891-0.192-1.099-0.511-2.005-1.308-2.651-2.303-0.272-0.4-0.5-0.833-0.672-1.296-0.199-0.527-0.292-1.068-0.344-1.62-0.099-1.109 0.057-2.229 0.536-3.271 0.719-1.552 2-2.735 3.604-3.328 3.319-1.219 7 0.484 8.219 3.791 1.224 3.308-0.479 6.991-3.781 8.215h-0.020zM13.563 21.027c-1.151 1.692-3.093 2.817-5.297 2.817-3.525 0-6.401-2.875-6.401-6.396s2.876-6.401 6.401-6.401c3.527 0 6.396 2.88 6.396 6.401 0 0.219-0.036 0.416-0.063 0.64-0.109 1.079-0.453 2.1-1.036 2.959zM4.197 17.364c0 2.188 1.781 3.959 3.964 3.959s3.959-1.771 3.959-3.959c0-2.181-1.776-3.952-3.959-3.952-2.177 0-3.959 1.771-3.959 3.952zM20.265 17.364c0 2.188 1.771 3.959 3.953 3.959s3.959-1.771 3.959-3.959c0-2.181-1.776-3.952-3.959-3.952-2.177 0-3.959 1.771-3.959 3.952zM5.568 17.364c0-1.427 1.161-2.593 2.583-2.593 1.417 0 2.599 1.167 2.599 2.593 0 1.433-1.161 2.6-2.599 2.6-1.443 0-2.604-1.167-2.604-2.6zM21.615 17.364c0-1.427 1.156-2.593 2.593-2.593 1.423 0 2.584 1.167 2.584 2.593 0 1.433-1.156 2.6-2.599 2.6-1.444 0-2.6-1.167-2.6-2.6zM16.208 7.921c2.88 0 5.48 0.516 7.761 1.548-0.86 0.025-1.699 0.176-2.543 0.479-2.015 0.74-3.62 2.224-4.5 4.167-0.416 0.88-0.635 1.812-0.719 2.755-0.301-4.104-3.681-7.353-7.844-7.437 2.281-0.979 4.928-1.511 7.787-1.511z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib tripadvisor';
-->
