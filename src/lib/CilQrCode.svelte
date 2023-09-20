<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil qr code';
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
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="48 48 176 48 176 16 16 16 16 176 48 176 48 48"
  />
  <path fill="var(--ci-primary-color, {color})" d="M176,176V80H80v96h96Zm-64-64h32v32H112Z" />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="328 48 464 48 464 176 496 176 496 16 328 16 328 48"
  />
  <path fill="var(--ci-primary-color, {color})" d="M432,176V80H336v96h96Zm-64-64h32v32H368Z" />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="176 464 48 464 48 336 16 336 16 496 176 496 176 464"
  />
  <path fill="var(--ci-primary-color, {color})" d="M176,336H80v96h96V336Zm-32,64H112V368h32Z" />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="464 464 328 464 328 496 496 496 496 336 464 336 464 464"
  />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="272 304 400 304 400 368 432 368 432 272 272 272 272 304"
  />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="432 432 432 400 240 400 240 272 80 272 80 304 208 304 208 432 432 432"
  />
  <rect width="32" height="96" x="208" y="80" fill="var(--ci-primary-color, {color})" />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="80 240 304 240 304 80 272 80 272 208 80 208 80 240"
  />
  <rect width="96" height="32" x="336" y="208" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="336" y="336" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="272" y="336" fill="var(--ci-primary-color, {color})" />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil qr code';
-->
