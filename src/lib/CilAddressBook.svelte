<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil address book';
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
  viewBox="0 0 512 512"
>
  <path
    fill="var(--ci-primary-color, {color})"
    d="M496,144.768V111.232H456.768V42a25,25,0,0,0-25.179-24.768H80.411A25,25,0,0,0,55.232,42V472a25,25,0,0,0,25.179,24.768H431.589A25,25,0,0,0,456.768,472V400.768H496V367.232H456.768V272.768H496V239.232H456.768V144.768Zm-72.768,94.464H376v33.536h47.232v94.464H376v33.536h47.232v62.464H88.768V50.768H423.232v60.464H376v33.536h47.232Z"
  />
  <path
    fill="var(--ci-primary-color, {color})"
    d="M313.639,306.925h0l-28.745-18.685,13.82-33.655V201.714a65.714,65.714,0,1,0-131.428,0v52.557l12.721,34.684-27.646,17.97A48.972,48.972,0,0,0,130,348.129V400H336V348.129A48.972,48.972,0,0,0,313.639,306.925ZM304,368H162V348.129a17.084,17.084,0,0,1,7.8-14.373l49.033-31.872-19.547-53.3V201.714a33.714,33.714,0,0,1,67.428,0v46.557l-21.5,52.347L296.2,333.756h0a17.084,17.084,0,0,1,7.8,14.373Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil address book';
-->
