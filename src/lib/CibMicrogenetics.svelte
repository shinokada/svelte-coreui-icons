<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cib microgenetics';
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
    d="M16.010 8c3.458 0 5.745 1.682 7.443 3.635l0.333 0.391c0.109 0.135 0.219 0.266 0.323 0.401 0.578 0.755 1.078 1.526 1.557 2.229 0.323 0.474 0.62 0.927 0.922 1.344l0.302 0.427c0.099 0.141 0.198 0.281 0.318 0.417 1.24 1.557 2.521 2.531 4.38 2.651 0.26-1.125 0.401-2.292 0.401-3.495 0-1.198-0.141-2.365-0.401-3.495-1.859 0.125-3.141 1.094-4.401 2.656-0.24-0.328-0.479-0.682-0.74-1.063-0.5-0.755-1.083-1.609-1.76-2.458 1.339-1.557 3-2.901 5.24-3.411-2.656-4.911-7.896-8.229-13.917-8.229-6 0-11.255 3.318-13.984 8.229 2.24 0.516 3.896 1.854 5.24 3.411 0.115 0.12 0.224 0.24 0.333 0.38l0.313 0.396c0.641 0.823 1.219 1.661 1.74 2.464l0.745 1.099 0.318 0.438c0.099 0.141 0.219 0.281 0.318 0.422 1.401 1.917 2.823 3.24 5 3.24 2.203 0 3.604-1.318 5.021-3.24l0.5 0.74c0.599 0.88 1.245 1.839 1.938 2.74-1.693 1.964-4 3.641-7.458 3.641s-5.74-1.698-7.438-3.641l-0.323-0.401-0.318-0.396c-0.578-0.76-1.078-1.542-1.557-2.24-0.323-0.484-0.625-0.922-0.922-1.344l-0.302-0.443c-0.099-0.135-0.198-0.276-0.318-0.417-1.302-1.479-2.583-2.458-4.443-2.578-0.26 1.13-0.401 2.302-0.401 3.5s0.135 2.37 0.391 3.495c1.859-0.12 3.135-1.094 4.391-2.656 0.229 0.328 0.474 0.682 0.724 1.063 0.5 0.755 1.078 1.609 1.75 2.458-1.344 1.563-3 2.901-5.24 3.411 2.729 4.911 7.964 8.229 13.984 8.229s11.255-3.318 13.984-8.229c-2.24-0.516-3.896-1.854-5.24-3.411-0.115-0.12-0.224-0.24-0.333-0.38l-0.313-0.396c-0.641-0.823-1.224-1.661-1.74-2.464l-0.74-1.12c-0.099-0.146-0.203-0.302-0.307-0.438-0.104-0.151-0.203-0.297-0.307-0.438-1.401-1.917-2.802-3.24-5-3.24-2.203 0-3.599 1.318-5 3.24l-0.5-0.745c-0.583-0.891-1.224-1.839-1.943-2.745 1.698-1.953 3.938-3.635 7.438-3.635z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cib microgenetics';
-->
