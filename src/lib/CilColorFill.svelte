<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil color fill';
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
    d="M40,496H472a24.028,24.028,0,0,0,24-24V400a24.028,24.028,0,0,0-24-24H40a24.028,24.028,0,0,0-24,24v72A24.028,24.028,0,0,0,40,496Zm8-88H464v56H48Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M45.01,239.489a50.2,50.2,0,0,0,36.2,61.07l158.5,40.524h0a50.174,50.174,0,0,0,61.07-36.2L353.742,97.745,97.969,32.352,85.959,79.326l-58-14.827-7.926,31,58,14.828ZM121.045,71.281l193.767,49.54L294.568,200H88.135ZM286.387,232,269.78,296.956a18.221,18.221,0,0,1-22.141,13.125h0l-158.5-40.525a18.22,18.22,0,0,1-13.124-22.14L80,231.82V232Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M420,352c37.5,0,68-32.3,68-72,0-16.181-9.341-38.514-28.559-68.277-13.285-20.576-26.39-37.021-26.941-37.711L420,158.37l-12.5,15.642c-.551.69-13.656,17.135-26.941,37.711C361.341,241.486,352,263.819,352,280,352,319.7,382.505,352,420,352Zm0-141.441C437.658,235.2,456,265.985,456,280c0,22.056-16.149,40-36,40s-36-17.944-36-40C384,265.985,402.343,235.2,420,210.559Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil color fill';
-->
