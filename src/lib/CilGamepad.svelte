<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil gamepad';
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
    d="M368,168H272V104H448a24.027,24.027,0,0,0,24-24V16H440V72H264a24.027,24.027,0,0,0-24,24v72H144A128.145,128.145,0,0,0,16,296V396.953A91.15,91.15,0,0,0,107.047,488h1.8A90.807,90.807,0,0,0,178.8,455.24l52.7-63.24h48.628l52.666,68.465A91.046,91.046,0,0,0,496,404.953V296A128.145,128.145,0,0,0,368,168Zm96,236.953a59.047,59.047,0,0,1-105.849,36L295.878,360H216.506l-62.294,74.754A58.893,58.893,0,0,1,108.85,456h-1.8A59.113,59.113,0,0,1,48,396.953V296a96.108,96.108,0,0,1,96-96H368a96.108,96.108,0,0,1,96,96Z"
  />
  <rect width="32" height="32" x="360" y="248" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="360" y="328" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="320" y="288" fill="var(--ci-primary-color, {color})" />
  <rect width="32" height="32" x="400" y="288" fill="var(--ci-primary-color, {color})" />
  <polygon
    fill="var(--ci-primary-color, {color})"
    points="152 248 120 248 120 288 80 288 80 320 120 320 120 360 152 360 152 320 192 320 192 288 152 288 152 248"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil gamepad';
-->
