<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil border left';
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
    points="72 440 72 406.546 72 373.092 72 339.637 72 306.183 72 272.728 72 272 72 240 72 239.273 72 205.818 72 172.364 72 138.909 72 105.455 72 72 72 40 40 40 40 72 40 105.455 40 138.909 40 172.364 40 205.818 40 239.273 40 272.728 40 306.183 40 339.637 40 373.092 40 406.546 40 440 40 472 72 472 72 440"
  />
  <rect width="32" height="32" x="440" y="440" fill="var(--ci-primary-color, {color})" />
  <rect width="33.455" height="32" x="306.182" y="440" fill="var(--ci-primary-color, {color})" />
  <rect width="33.455" height="32" x="172.364" y="440" fill="var(--ci-primary-color, {color})" />
  <rect width="33.455" height="32" x="373.091" y="440" fill="var(--ci-primary-color, {color})" />
  <rect width="33.455" height="32" x="105.455" y="440" fill="var(--ci-primary-color, {color})" />
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
  <rect width="33.455" height="32" x="239.272" y="440" fill="var(--ci-primary-color, {color})" />
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
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil border left';
-->
