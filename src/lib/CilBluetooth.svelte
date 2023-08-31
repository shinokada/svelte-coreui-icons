<script>
  export let color = 'currentColor';
  export let role = 'img';
  export let size = '32';
  export let ariaLabel = 'cil bluetooth';
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
    d="M150.627,376,232,294.627V496h38.627l120-120-120-120,120-120-120-120H232V217.373L150.627,136H105.373l120,120-120,120ZM264,54.627,345.373,136,264,217.373Zm0,240L345.373,376,264,457.373Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let color = 'currentColor';
@prop export let role = 'img';
@prop export let size = '32';
@prop export let ariaLabel = 'cil bluetooth';
-->
