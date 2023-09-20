<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil border bottom';
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
  <rect width="432" height="32" x="40" y="440" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="33.454" x="40" y="306.183" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="33.454" x="40" y="373.092" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="33.455" x="40" y="239.272" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="33.454" x="40" y="172.364" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="33.454" x="40" y="105.455" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="40" y="40" fill="var(--ci-primary-color, {color})" />
  <rect width="33.455" height="32" x="306.182" y="40" fill="var(--ci-primary-color, {color})" />
  <rect width="33.455" height="32" x="172.364" y="40" fill="var(--ci-primary-color, {color})" />
  <rect width="33.455" height="32" x="373.091" y="40" fill="var(--ci-primary-color, {color})" />
  <rect width="33.455" height="32" x="239.272" y="40" fill="var(--ci-primary-color, {color})" />
  <rect width="33.455" height="32" x="105.455" y="40" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="440" y="40" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="33.454" x="440" y="373.091" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="33.454" x="440" y="306.182" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="33.454" x="440" y="105.454" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="33.454" x="440" y="172.363" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="33.455" x="440" y="239.272" fill="var(--ci-primary-color, {color})" />
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
@prop export let ariaLabel = 'cil border bottom';
-->
