<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib viadeo';
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
    d="M13.474 29.318h0.042c1.542 0 2.958-0.375 4.25-1.125 1.286-0.745 2.313-1.802 3.073-3.177 0.755-1.37 1.135-2.849 1.135-4.443 0-1.281-0.224-2.474-0.682-3.557 0.76-0.161 1.682-0.474 2.641-1.068 0.578 1.406 0.88 2.927 0.88 4.568 0 3.063-1.042 5.74-3.161 8.042-2.12 2.281-4.823 3.443-8.12 3.443-3.323 0-6.031-1.146-8.135-3.443-2.099-2.292-3.141-4.974-3.141-8.036 0-3.047 0.995-5.682 2.99-7.917 2.177-2.458 4.948-3.693 8.286-3.693 1.406 0 2.708 0.224 3.911 0.656-0.391 0.766-0.745 1.698-0.839 2.708-0.953-0.401-1.979-0.599-3.078-0.599-2.318 0-4.307 0.865-5.969 2.604-1.656 1.74-2.49 3.844-2.49 6.302 0 1.599 0.38 3.078 1.141 4.438 0.755 1.38 1.776 2.443 3.068 3.182 0.859 0.5 1.766 0.839 2.734 1 8.276-3.198 7.302-18.88 7.24-19.74l0.073 0.219c4.859 12.979-5.734 19.661-5.734 19.661h-0.104zM28.104 0.724c-1.354 2.875-3.859 3.411-3.859 3.411-2.505 0.635-3.38 1.604-3.38 1.604-2.505 2.516-0.536 5.573-0.536 5.573 5.417-1.229 7.391-5.677 7.391-5.677-0.24 2.99-6.682 6.516-6.682 6.516 2.135 2.083 4.167 1.833 5.51 1.031 1.781-1.057 2.635-3.38 2.635-3.38 1.729-5.161-1.078-9.078-1.078-9.078zM14.802 0c2.661 4.474 4.109 8.484 4.432 9.438v-0.036c-0.656-6.891-4.438-9.401-4.438-9.401z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib viadeo';
-->
