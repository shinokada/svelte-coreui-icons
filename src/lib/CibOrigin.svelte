<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib origin';
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
    d="M16.786 4.146c1.583 0.094 3.135 0.51 4.552 1.224 1.375 0.688 2.599 1.635 3.609 2.792 1 1.156 1.76 2.474 2.286 3.953 0.521 1.479 0.729 3.036 0.62 4.672-0.047 0.844-0.182 1.667-0.406 2.464-0.224 0.781-0.526 1.542-0.901 2.271-0.583 1.13-1.24 2.198-1.958 3.214-0.719 1.010-1.5 1.953-2.349 2.823-0.854 0.87-1.755 1.672-2.714 2.406-0.958 0.724-1.958 1.38-3.005 1.969l-0.047 0.036c-0.047 0.021-0.094 0.036-0.146 0.031-0.083-0.021-0.156-0.068-0.214-0.13-0.052-0.068-0.083-0.151-0.083-0.229 0-0.042 0.005-0.078 0.016-0.115 0.016-0.031 0.031-0.057 0.052-0.083 0.37-0.526 0.672-1.073 0.917-1.646 0.24-0.578 0.401-1.182 0.49-1.813 0-0.042-0.021-0.083-0.052-0.115-0.026-0.031-0.073-0.052-0.115-0.052-0.349 0.047-0.703 0.073-1.057 0.083-0.354 0.016-0.708 0-1.063-0.047-1.583-0.094-3.135-0.516-4.557-1.224-1.375-0.688-2.599-1.635-3.609-2.792-1.005-1.161-1.781-2.5-2.286-3.953-0.521-1.5-0.734-3.083-0.62-4.672 0.047-0.844 0.182-1.667 0.411-2.464s0.526-1.536 0.901-2.24c0.583-1.151 1.24-2.234 1.958-3.245s1.5-1.953 2.344-2.828c0.854-0.865 1.755-1.667 2.714-2.396s1.958-1.385 3.005-1.974l0.047-0.031c0.047-0.026 0.094-0.036 0.146-0.036 0.089 0.021 0.161 0.068 0.214 0.13 0.057 0.068 0.083 0.141 0.083 0.234 0 0.036-0.005 0.073-0.016 0.109-0.010 0.031-0.031 0.057-0.052 0.083-0.365 0.516-0.672 1.068-0.917 1.651-0.24 0.578-0.396 1.177-0.484 1.807 0 0.047 0.016 0.083 0.047 0.115s0.073 0.052 0.115 0.052c0.349-0.047 0.703-0.073 1.057-0.083 0.365-0.010 0.714 0.005 1.068 0.047zM15.708 20.635c1.229 0.104 2.448-0.307 3.359-1.141 0.964-0.849 1.479-1.917 1.568-3.198 0.104-1.24-0.307-2.464-1.141-3.38-0.802-0.943-1.964-1.51-3.198-1.552-1.234-0.104-2.458 0.313-3.38 1.141-0.943 0.802-1.51 1.964-1.552 3.203-0.104 1.234 0.307 2.453 1.13 3.38 0.833 0.964 1.906 1.484 3.214 1.547z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib origin';
-->
