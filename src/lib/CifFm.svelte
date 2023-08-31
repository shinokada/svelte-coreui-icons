<script>
  export let color = 'currentColor';
  export let role = 'img';
  export let width;
  export let height;
  export let ariaLabel = 'cif fm';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {width}
  {height}
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
  viewBox="0 0 301 159"
>
  <g fill="none">
    <path fill="#75B2DD" d="M.5.552h300v157.895H.5z" />
    <path
      fill="#FFF"
      d="M135.483 27.252l9.281 6.743-3.545 10.91 9.281-6.743 9.281 6.743-3.545-10.91 9.281-6.743h-11.472l-3.545-10.91-3.493 10.91zM87.342 79.5l10.91 3.545v11.472l6.743-9.281 10.911 3.545-6.743-9.281 6.743-9.281-10.911 3.545-6.743-9.281v11.472zM135.483 131.748h11.472l3.545 10.91 3.545-10.91h11.472l-9.281-6.743 3.545-10.911-9.281 6.743-9.281-6.743 3.545 10.911zM185.094 70.219l6.744 9.281-6.744 9.281 10.911-3.545 6.743 9.281V83.045l10.91-3.545-10.91-3.545V64.483l-6.743 9.281z"
    />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-coreui-icons.vercel.app)
## Props
@prop export let color = 'currentColor';
@prop export let role = 'img';
@prop export let width;
@prop export let height;
@prop export let ariaLabel = 'cif fm';
-->
