<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil object ungroup';
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
  viewBox="0 0 512 512"
>
  <path
    fill="var(--ci-primary-color, {color})"
    d="M400,168H328V112h32V16H264V48H112V16H16v96H48V264H16v96h96V328h72v72H152v96h96V464H400v32h96V400H464V232h32V136H400ZM296,48h32V80H296Zm32,248v32H296V296ZM48,48H80V80H48ZM80,328H48V296H80Zm32-32V264H80V112h32V80H264v32h32V264H264v32ZM216,464H184V432h32Zm248,0H432V432h32ZM432,168h32v32H432Zm0,232H400v32H248V400H216V328h48v32h96V264H328V200h72v32h32Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil object ungroup';
-->
