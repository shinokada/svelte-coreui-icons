<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil border outer';
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
    d="M56,40A16,16,0,0,0,40,56V456a16,16,0,0,0,16,16H456a16,16,0,0,0,16-16V56a16,16,0,0,0-16-16ZM440,440H72V72H440Z"
  />
  <rect
    width="33.455"
    height="33.455"
    x="239.272"
    y="239.272"
    fill="var(--ci-primary-color, {color})"
  />
  <rect
    width="33.455"
    height="33.454"
    x="239.272"
    y="306.182"
    fill="var(--ci-primary-color, {color})"
  />
  <rect
    width="33.455"
    height="33.454"
    x="239.272"
    y="172.363"
    fill="var(--ci-primary-color, {color})"
  />
  <rect
    width="33.455"
    height="33.454"
    x="239.272"
    y="105.454"
    fill="var(--ci-primary-color, {color})"
  />
  <rect
    width="33.455"
    height="33.454"
    x="239.272"
    y="373.091"
    fill="var(--ci-primary-color, {color})"
  />
  <rect
    width="33.455"
    height="33.455"
    x="306.182"
    y="239.272"
    fill="var(--ci-primary-color, {color})"
  />
  <rect
    width="33.455"
    height="33.455"
    x="373.091"
    y="239.272"
    fill="var(--ci-primary-color, {color})"
  />
  <rect
    width="33.455"
    height="33.455"
    x="172.364"
    y="239.272"
    fill="var(--ci-primary-color, {color})"
  />
  <rect
    width="33.455"
    height="33.455"
    x="105.455"
    y="239.272"
    fill="var(--ci-primary-color, {color})"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil border outer';
-->
