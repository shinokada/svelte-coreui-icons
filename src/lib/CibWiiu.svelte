<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib wiiu';
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
    d="M14.844 11.245c-0.62 0-1.115 0.474-1.115 1.083 0.010 0.604 0.51 1.089 1.115 1.083 0.651 0 1.167-0.479 1.167-1.083s-0.516-1.083-1.167-1.083zM18.75 11.245c-0.62 0-1.13 0.474-1.13 1.083 0 0.589 0.51 1.083 1.13 1.083 0.635 0 1.151-0.479 1.151-1.083s-0.516-1.083-1.151-1.083zM23.625 11.255c-0.708 0-1.323 0.448-1.323 1.146v4.422c0 1.078 0.75 1.719 1.839 1.719h6.198c0.917 0 1.661-0.635 1.661-1.552v-4.531c0-0.547-0.411-1.146-0.917-1.146h-1.432v3.734c0 2.828-4.938 2.802-4.938 0.052v-3.839h-1.089zM25.865 11.255v3.271c0 2.182 2.578 1.87 2.578 0.344v-3.609h-2.578zM6.443 11.693c-0.62 0-1.031 0.313-1.25 1.010-0.203 0.708-1.49 5.656-1.49 5.656l-1.688-6.589h-2.016c0 0 1.932 7.021 2.198 7.844 0.203 0.63 0.698 1.146 1.411 1.146 0.839 0 1.224-0.609 1.396-1.146 0.188-0.563 1.438-5.198 1.438-5.198s1.255 4.635 1.427 5.198c0.188 0.536 0.573 1.146 1.396 1.146 0.729 0 1.208-0.516 1.427-1.146 0.26-0.823 2.198-7.844 2.198-7.844h-2.026l-1.677 6.589c0 0-1.286-4.948-1.5-5.656-0.203-0.703-0.641-1.010-1.24-1.010zM13.917 14.479v6.219h1.922v-6.219zM17.807 14.479v6.219h1.922v-6.219z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib wiiu';
-->
