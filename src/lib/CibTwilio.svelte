<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib twilio';
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
    d="M16 0c-8.823-0.010-15.99 7.135-16 15.964v0.036c0 8.854 7.146 16 16 16s16-7.146 16-16c0-8.854-7.146-16-16-16zM16 27.734c-6.464 0.021-11.714-5.203-11.734-11.667v-0.068c-0.021-6.464 5.203-11.714 11.667-11.734h0.068c6.464-0.021 11.714 5.203 11.734 11.667v0.068c0.021 6.464-5.203 11.714-11.667 11.734zM23.255 12.052c0 1.813-1.495 3.307-3.307 3.307-1.823-0.010-3.297-1.484-3.307-3.307 0-1.813 1.495-3.307 3.307-3.307s3.307 1.495 3.307 3.307zM23.255 19.948c0 1.813-1.495 3.307-3.307 3.307-1.823-0.010-3.302-1.49-3.307-3.307 0-1.813 1.495-3.307 3.307-3.307s3.307 1.495 3.307 3.307zM15.359 19.948c0 1.813-1.49 3.307-3.302 3.307-1.823-0.010-3.302-1.484-3.307-3.307 0-1.813 1.49-3.307 3.307-3.307 1.807 0 3.302 1.495 3.302 3.307zM15.359 12.052c0 1.813-1.49 3.307-3.302 3.307-1.823-0.010-3.302-1.484-3.307-3.307 0-1.813 1.49-3.307 3.307-3.307 1.807 0 3.302 1.495 3.302 3.307z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib twilio';
-->
