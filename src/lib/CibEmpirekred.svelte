<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib empirekred';
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
  viewBox="0 0 32 32"
>
  <path
    d="M31.995 6.245c0-2.772-2.235-5.032-4.968-5.032h-22.068c-2.74 0-4.964 2.26-4.964 5.041v10.048c0 0.447 0.057 0.891 0.177 1.328 0.041 0.176 0.093 0.353 0.161 0.52 0.333 0.828 0.869 1.557 1.563 2.125 0.683 0.697 1.563 1.459 2.62 2.276l0.14 0.099 0.584 0.443 0.692 0.532c1.584 1.213 4.271 3.271 8.219 6.276 0.647 0.489 1.385 0.901 1.844 0.901s1.203-0.412 1.844-0.901c3.948-3.005 6.631-5.063 8.219-6.276l1.297-0.989h-0.005l0.145-0.115c1.068-0.813 1.953-1.584 2.625-2.276 0.687-0.557 1.213-1.281 1.536-2.105 0.219-0.588 0.333-1.208 0.339-1.833v-9.536zM26.473 14.568c-0.124-0.021-0.249-0.041-0.375-0.057-0.14 0-0.301-0.021-0.443-0.021-0.369-0.011-0.739 0.068-1.077 0.219-0.287 0.136-0.537 0.328-0.719 0.584-0.183 0.26-0.308 0.552-0.387 0.859-0.077 0.339-0.119 0.699-0.119 1.079v3.844h-6.704l-4.973-7.448-2.079 2.104v5.297h-3.625v-16.496h3.62v6.844l6.443-6.839h4.527l-6.437 6.516 6.885 9.724v-8.24h2.219v1.579h0.025c0.115-0.26 0.261-0.511 0.443-0.735 0.193-0.224 0.401-0.411 0.647-0.573 0.24-0.14 0.5-0.276 0.771-0.359 0.271-0.079 0.563-0.12 0.855-0.12 0.151 0 0.317 0.041 0.504 0.084z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib empirekred';
-->
