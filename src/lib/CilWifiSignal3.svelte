<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '32';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'cil wifi signal 3';
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
    d="M503.785,124.254a432.019,432.019,0,0,0-495.57,0L8,124.4v27.438L41,198.964h0L237.778,480h36.444L471.005,198.964h0l33-47.122V124.4ZM189.87,355.789,315.491,163.662a317.213,317.213,0,0,1,42.184,10.981L213.968,390.2ZM170.1,327.553l-26.453-37.778L233.17,158.932q11.354-.8,22.83-.8,12.2,0,24.276.918Zm-46.064-65.786L85.788,207.145a317.977,317.977,0,0,1,104.534-42.258ZM233.669,418.341l154.47-231.7a320.459,320.459,0,0,1,38.073,20.509L256,450.232Zm210.91-237.427a351.947,351.947,0,0,0-377.158,0L39.856,141.547a400.039,400.039,0,0,1,432.288,0Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '32';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'cil wifi signal 3';
-->
