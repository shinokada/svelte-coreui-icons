<script>
  export let color = 'currentColor';
  export let role = 'img';
  export let size = '32';
  export let ariaLabel = 'cil align right';
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
  <rect width="480" height="32" x="16" y="64" fill="var(--ci-primary-color, {color})" />
  <rect width="328" height="32" x="168" y="152" fill="var(--ci-primary-color, {color})" />
  <rect width="480" height="32" x="16" y="240" fill="var(--ci-primary-color, {color})" />
  <rect width="328" height="32" x="168" y="328" fill="var(--ci-primary-color, {color})" />
  <rect width="480" height="32" x="16" y="416" fill="var(--ci-primary-color, {color})" />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let color = 'currentColor';
@prop export let role = 'img';
@prop export let size = '32';
@prop export let ariaLabel = 'cil align right';
-->
