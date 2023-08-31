<script>
  export let color = 'currentColor';
  export let role = 'img';
  export let size = '32';
  export let ariaLabel = 'cib quantopian';
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
    d="M2 0h28c1.104 0 2 0.896 2 2v28c0 1.104-0.896 2-2 2h-28c-1.104 0-2-0.896-2-2v-28c0-1.104 0.896-2 2-2zM4 4v24h24v-24zM7.198 18.401h3.203v6.401h-3.203zM12 12h3.198v12.802h-3.198zM16.802 15.198h3.198v9.604h-3.198zM21.599 7.198h3.198v17.604h-3.198z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let color = 'currentColor';
@prop export let role = 'img';
@prop export let size = '32';
@prop export let ariaLabel = 'cib quantopian';
-->
