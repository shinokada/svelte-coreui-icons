<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib messenger';
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
    d="M0 15.521c0-8.922 6.984-15.521 16-15.521s16 6.599 16 15.521c0 8.917-6.984 15.521-16 15.521-1.615 0-3.172-0.214-4.625-0.615-0.286-0.078-0.589-0.052-0.854 0.068l-3.188 1.401c-0.833 0.37-1.776-0.224-1.802-1.135l-0.094-2.854c-0.010-0.349-0.167-0.672-0.422-0.906-3.245-2.927-5.073-7.109-5.016-11.479zM11.094 12.599l-4.693 7.469c-0.469 0.703 0.427 1.521 1.094 1l5.052-3.828c0.349-0.266 0.802-0.266 1.161 0l3.729 2.802c1.125 0.839 2.724 0.531 3.469-0.641l4.693-7.469c0.469-0.703-0.427-1.505-1.094-1l-5.052 3.828c-0.333 0.266-0.802 0.266-1.146 0l-3.734-2.802c-1.125-0.849-2.729-0.552-3.479 0.641z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib messenger';
-->
