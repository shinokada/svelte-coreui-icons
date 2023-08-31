<script>
  import Tabs from 'flowbite-svelte/Tabs.svelte';
  import TabItem from 'flowbite-svelte/TabItem.svelte';
  import TableSearch from 'flowbite-svelte/TableSearch.svelte';
  import Label from 'flowbite-svelte/Label.svelte';
  import Range from 'flowbite-svelte/Range.svelte';

  import * as Icons from '$lib';

  const contentClass = ' rounded-lg dark:bg-stone-950 mt-4';
  let searchTerm = '';

  $: filteredEntries = Object.entries(Icons).filter(([name, component]) => {
    return name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
  });
</script>

<h1>Svelte Coreui Icons: Flag</h1>

<TableSearch
  placeholder="Search by icon name"
  hoverable={true}
  bind:inputValue={searchTerm}
  divClass="relative overflow-x-auto"
>
  <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 px-4 dark:text-white">
    {#each filteredEntries as [name, component]}
      {#if name.includes('Cif')}
        <div class="flex gap-4 items-center text-lg">
          <svelte:component this={component} class="shrink-0 h-20 w-20" />
          {name}
        </div>
      {/if}
    {/each}
  </div>
</TableSearch>
