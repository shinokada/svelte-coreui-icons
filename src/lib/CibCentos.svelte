<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib centos';
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
    d="M16.099 0.089l-4.255 4.286h-7.38v7.245l-4.464 4.396 4.464 4.396v7.188h7.167l4.38 4.313 4.38-4.313h7.24v-7.167l4.37-4.396-4.307-4.339v-7.271h-7.281zM16.099 1.089l3.323 3.339h-2.255v8.589l-1.068 1.073-1.078-1.083v-8.63h-2.182zM5.167 5.073h5.979l-2.5 2.516 5.672 5.708v0.87h-1.063l-5.688-5.604-2.401 2.359zM12.135 5.073h2.182v7.224l-4.677-4.708zM17.875 5.13h2.25l2.438 2.458-4.688 4.719zM21.115 5.13h5.87v5.859l-2.438-2.453-5.656 5.688h-1.016v-0.922l5.677-5.714zM24.547 9.531l2.438 2.458v2.234h-7.099zM7.568 9.547l4.688 4.62h-7.089v-2.255zM4.464 12.604v2.266h8.505l1.161 1.141-1.047 1.026h-8.615v2.385l-3.464-3.406zM27.693 12.698l3.318 3.333-3.38 3.401v-2.396h-8.547l-1-1.005 1.099-1.104h8.51zM15.021 14l1.078 1.089 0.25-0.25 0.818-0.828v0.917h1.026l-1.099 1.104 1 1.005h-0.958v1.078l-1.125-1.104-0.99 0.974v-0.943h-0.932l1.042-1.026-0.25-0.25-0.911-0.896h1.052zM5.167 17.745h7.203l-4.802 4.729-2.396-2.359zM13.375 17.745h0.943v0.932l-5.87 5.781 2.469 2.432h-5.75v-5.786l2.401 2.359zM17.839 17.745h0.953l5.755 5.786 0.25-0.245 2.13-2.151v5.755h-5.823l2.474-2.432-0.255-0.245-5.484-5.406zM19.786 17.745h7.141v2.396l-2.38 2.396zM16.010 17.995l1.125 1.109v8.49h2.25l-3.375 3.328-3.375-3.328h2.385v-8.62zM14.318 19.667v7.224h-2.401l-2.469-2.427zM17.839 19.797l4.734 4.661-2.469 2.438h-2.266z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib centos';
-->
