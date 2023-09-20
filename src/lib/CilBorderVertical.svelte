<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil border vertical';
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
    points="272 456 272 440 272 406.545 272 373.091 272 339.636 272 306.182 272 272.727 272 272 272 240 272 239.272 272 205.817 272 172.363 272 138.908 272 105.454 272 72 272 56 272 40 240 40 240 56 240 72 240 105.454 240 138.908 240 172.363 240 205.817 240 239.272 240 240 240 272 240 272.727 240 306.182 240 339.636 240 373.091 240 406.545 240 440 240 456 240 472 272 472 272 456"
  />
  <rect width="32" height="32" x="440" y="440" fill="var(--ci-primary-color, {color})" />
  <rect width="33.455" height="32" x="306.182" y="440" fill="var(--ci-primary-color, {color})" />
  <rect width="33.455" height="32" x="172.364" y="440" fill="var(--ci-primary-color, {color})" />
  <rect width="33.455" height="32" x="373.091" y="440" fill="var(--ci-primary-color, {color})" />
  <rect width="33.455" height="32" x="105.455" y="440" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="40" y="440" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="33.454" x="40" y="306.183" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="33.454" x="40" y="373.092" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="33.455" x="40" y="239.272" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="33.454" x="40" y="172.364" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="33.454" x="40" y="105.455" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="40" y="40" fill="var(--ci-primary-color, {color})" />
  <rect width="33.455" height="32" x="306.182" y="40" fill="var(--ci-primary-color, {color})" />
  <rect width="33.455" height="32" x="172.364" y="40" fill="var(--ci-primary-color, {color})" />
  <rect width="33.455" height="32" x="373.091" y="40" fill="var(--ci-primary-color, {color})" />
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
@prop export let ariaLabel = 'cil border vertical';
-->
