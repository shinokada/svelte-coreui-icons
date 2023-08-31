<script>
  export let color = 'currentColor';
  export let role = 'img';
  export let size = '32';
  export let ariaLabel = 'cil building';
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
    d="M440,464V16H72V464H16v32H496V464Zm-32,0H272V400H240v64H104V48H408Z"
  />
  <rect width="32" height="32" x="160" y="304" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="240" y="304" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="320" y="304" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="160" y="208" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="240" y="208" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="320" y="208" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="160" y="112" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="240" y="112" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="320" y="112" fill="var(--ci-primary-color, {color})" />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let color = 'currentColor';
@prop export let role = 'img';
@prop export let size = '32';
@prop export let ariaLabel = 'cil building';
-->
