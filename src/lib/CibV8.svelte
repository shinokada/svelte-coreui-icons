<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib v8';
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
    d="M9.109 8c0-0.213 0.011-0.427 0.031-0.64 0.027-0.277 0.095-0.532 0.152-0.797l-0.928-1.833h-8.364l2.912 5.088h2.036l2.792 5.308c0.448-1.396 1.239-2.656 2.301-3.661-0.615-1.052-0.937-2.245-0.932-3.464zM13.817 26.219l2.183 3.964 2.183-3.969c-0.713 0.188-1.437 0.313-2.183 0.313s-1.469-0.125-2.183-0.308zM23.636 4.729l-0.953 1.677c0.072 0.312 0.145 0.629 0.177 0.963 0.135 1.428-0.183 2.86-0.901 4.095 1.063 1.009 1.853 2.271 2.301 3.661l2.797-5.308h2.036l2.907-5.088zM23.797 16.011c-0.407-1.74-1.381-3.292-2.767-4.417 2.917-4.088-0.004-9.771-5.031-9.776-3.416 0-6.183 2.767-6.183 6.183 0 1.292 0.401 2.547 1.152 3.593-1.881 1.521-2.969 3.808-2.969 6.224 0 3.292 2.021 6.251 5.083 7.453 1.881 0.735 3.959 0.729 5.835 0 3.697-1.453 5.771-5.391 4.88-9.26zM16 5.636c1.505 0 2.729 1.224 2.729 2.728 0 3.636-5.459 3.636-5.459 0 0-1.504 1.224-2.728 2.729-2.728zM16 20.912c-3.973-0.147-3.973-6.043 0-6.183 1.708 0 3.088 1.38 3.088 3.088 0 1.709-1.38 3.095-3.088 3.095z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib v8';
-->
