<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib makerbot';
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
    d="M30.74 9.771c-0.807-1.906-1.958-3.62-3.427-5.083-1.469-1.469-3.177-2.62-5.083-3.427-1.979-0.839-4.073-1.26-6.229-1.26-2.161 0-4.255 0.422-6.229 1.26-1.906 0.807-3.615 1.958-5.083 3.427-1.469 1.464-2.62 3.177-3.432 5.083-0.833 1.974-1.255 4.068-1.255 6.229 0 2.156 0.422 4.25 1.26 6.229 0.807 1.906 1.958 3.62 3.427 5.083 1.469 1.469 3.177 2.62 5.083 3.427 1.974 0.844 4.068 1.26 6.229 1.26 2.156 0 4.25-0.417 6.229-1.26 1.906-0.802 3.615-1.958 5.083-3.417s2.62-3.182 3.427-5.083c0.839-1.958 1.26-4.057 1.26-6.219 0-2.156-0.422-4.24-1.26-6.219zM16 29.781c-7.609 0-13.781-6.172-13.781-13.781s6.172-13.781 13.781-13.781c7.609 0 13.781 6.172 13.781 13.781s-6.172 13.781-13.781 13.781zM20.323 5.495h-8.646c-1.229 0-2.266 0.432-3.109 1.302-0.849 0.854-1.271 1.896-1.271 3.109v13.578c0 0.599 0.177 1.078 0.531 1.458 0.354 0.359 0.818 0.563 1.401 0.563 0.594 0 1.073-0.182 1.438-0.542 0.365-0.365 0.547-0.839 0.547-1.443v-14.083h2.854v14.042c0 0.594 0.177 1.073 0.521 1.438s0.818 0.552 1.411 0.552c0.594 0 1.068-0.188 1.411-0.552 0.349-0.365 0.521-0.844 0.521-1.438v-14.042h2.859v14.042c0 0.594 0.177 1.073 0.542 1.438s0.849 0.552 1.438 0.552c0.583 0 1.047-0.188 1.401-0.568 0.359-0.37 0.536-0.849 0.536-1.422v-13.578c0-1.214-0.422-2.25-1.271-3.115-0.844-0.865-1.88-1.302-3.115-1.302z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib makerbot';
-->
