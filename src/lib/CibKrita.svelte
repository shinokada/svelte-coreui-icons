<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib krita';
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
    d="M0.869 1.016c-0.26-0.005-0.509 0.12-0.667 0.328-0.468 0.593-0.047 1.192 0.485 1.683 0.271 0.249 2.359 2.389 4.567 4.703 0.699-0.98 1.511-1.865 2.423-2.647-2.787-1.728-5.417-3.395-5.729-3.613-0.349-0.251-0.724-0.453-1.079-0.453zM7.677 5.083c2.463 1.532 5.047 3.111 6.255 3.787 1.959 1.095 5.011 3.579 5.459 5.912 0.713 0.62 2.907 2.557 3.459 3.219 0.932-0.281 2.025 0.177 2.749 1.489 1.151 2.115 0.303 5-2.625 6.651-0.129 0.125-0.26 0.245-0.395 0.36l0.395-0.36c1.521-1.952-0.952-3.249-1.567-5.151-0.115-0.333-0.167-0.687-0.147-1.036-0.713-0.38-2.812-1.937-3.729-2.625-2.4 0.213-5.609-2.359-7.129-4.104-0.932-1.068-3.095-3.355-5.147-5.495-1.771 2.489-2.724 5.464-2.728 8.521 0 5.957 3.593 11.333 9.099 13.613 5.505 2.281 11.844 1.021 16.057-3.192s5.479-10.552 3.197-16.063c-2.281-5.505-7.656-9.093-13.615-9.093-3.52 0.005-6.921 1.271-9.588 3.567zM19.292 15.151c-0.688 0.167-1.292 1.109-1.495 1.745-0.048 0.151-0.052 0.401 0.088 0.453 1.073 0.791 2.079 1.557 3.203 2.265 0.215-0.521 0.995-1.281 1.459-1.599zM3.917 17.339c1.083 2.531 7.728 9.557 16.077 3.593-0.005 0.323 0.047 0.647 0.151 0.953 0.615 1.891 3.152 3.235 1.652 5.188-2.844 1.817-6.667 1.599-9.319 0.703-4.744-1.604-7.885-5.776-8.561-10.437zM22.292 18.271c-0.032 0.021-0.057 0.041-0.089 0.068-0.005 0-0.009 0.011-0.009 0.011 0-0.005 0.004-0.011 0.009-0.011 0.032-0.021 0.057-0.047 0.089-0.068z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib krita';
-->
