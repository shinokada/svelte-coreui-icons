<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil report slash';
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
  <rect width="32" height="32" x="240" y="352" fill="var(--ci-primary-color, {color})" />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="355.411 16 156.589 16 121.653 53.771 144.298 76.416 170.58 48 341.42 48 464 180.53 464 331.47 432.937 365.055 455.581 387.7 496 344 496 168 355.411 16"
  />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="240 128 240 172.118 272 204.118 272 128 240 128"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M16,16V38.627l62.164,62.164L16,168V344L156.589,496H355.411l56.681-61.281L473.373,496H496V473.373L38.627,16ZM341.42,464H170.58L48,331.47V180.53l52.808-57.095L240,262.627V320h32V294.627L389.447,412.074Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil report slash';
-->
