<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib symantec';
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
    d="M30.505 0v0.984h0.979v-0.984zM30.505 0.984h-0.984v0.985h0.984zM30.505 1.969v0.984h0.979v-0.984zM29.521 1.969h-1.975v0.984h-0.979v1.968h-0.984v0.985h-1.975v0.968c-2.527-2.063-5.683-3.187-8.943-3.181-7.817 0-14.151 6.333-14.151 14.156 0 7.812 6.333 14.151 14.151 14.151s14.151-6.339 14.151-14.151c0-3.417-1.203-6.543-3.213-8.989h0.959v-0.985h0.989v-1.968h0.979v-0.985h0.991v-0.984h-0.991v-0.984h0.991zM25.584 4.921v-0.984h-0.991v0.984zM14.667 8.203c1.917 0 3.787 0.573 5.375 1.641h-0.369v0.984h-0.984c-2.568 3.213-3.219 4.625-4.24 7.219-1.161-2.349-2.552-3.968-4.953-5.041l-0.025-0.011c-0.433-0.109-0.657-0.167-0.953 0.256-0.308 0.432-0.125 0.817 0.239 1.276 0.261 0.312 0.521 0.624 0.781 0.937 0.729 0.859 1.464 1.719 2.011 2.713 0.547 0.979 1.172 2.359 1.656 3.427 0.303 0.656 0.543 1.193 0.683 1.453 0.292 0.541 1 0.781 1.271 0.781 1.317-0.156 1.443-0.776 1.656-1.844l0.079-0.349c0.448-2.099 1.027-4.271 3.765-6.88v-0.979h0.984v-0.984h0.985v-0.396c1.099 1.604 1.687 3.5 1.681 5.443 0 5.317-4.323 9.635-9.64 9.635s-9.599-4.317-9.599-9.635c0-5.323 4.281-9.641 9.599-9.641z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib symantec';
-->
