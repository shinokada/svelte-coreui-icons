<script>
export let color = "currentColor"
export let role="img";
export let size = "32"; export let ariaLabel="cil euro" 
</script>
<svg xmlns="http://www.w3.org/2000/svg" width="{size}"
height="{size}" {role}
{...$$restProps}
aria-label="{ariaLabel}"
fill="{color}"
on:click
on:keydown
on:keyup
on:focus
on:blur
on:mouseenter
on:mouseleave
on:mouseover
on:mouseout
 viewBox="0 0 512 512">
  <path fill="var(--ci-primary-color, {color})" d="M316,120h60V88H316c-73.747,0-136.794,46.657-161.195,112H104v32h42.292a172.176,172.176,0,0,0,0,56H104v32h50.805c24.4,65.343,87.448,112,161.2,112h60V400H316a140.176,140.176,0,0,1-126.474-80H344V288H178.815a140.661,140.661,0,0,1,0-56H344V200H189.526A140.176,140.176,0,0,1,316,120Z" />
</svg>

<!--
@component
[Go to Document](https://shinokada.github.io/svelte-coreui-icons/)
## Props
@prop role = 'img';
@prop size = '32';
@prop color = 'currentColor'
@prop ariaLabel='file name'
## Event
- on:click
- on:keydown
- on:keyup
- on:focus
- on:blur
- on:mouseenter
- on:mouseleave
- on:mouseover
- on:mouseout
-->
