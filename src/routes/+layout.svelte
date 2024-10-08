<script>
  import '../app.postcss';
  import { page } from '$app/stores';
  import { afterNavigate } from '$app/navigation';
  import DarkMode from 'flowbite-svelte/DarkMode.svelte';
  import Navbar from 'flowbite-svelte/Navbar.svelte';
  import NavBrand from 'flowbite-svelte/NavBrand.svelte';
  import NavLi from 'flowbite-svelte/NavLi.svelte';
  import NavUl from 'flowbite-svelte/NavUl.svelte';
  import NavHamburger from 'flowbite-svelte/NavHamburger.svelte';
  import Footer from 'flowbite-svelte/Footer.svelte';
  import FooterBrand from 'flowbite-svelte/FooterBrand.svelte';
  import FooterLinkGroup from 'flowbite-svelte/FooterLinkGroup.svelte';
  import FooterLink from 'flowbite-svelte/FooterLink.svelte';
  import { MetaTags } from 'svelte-meta-tags';
  import Runatics from './utils/Runatics.svelte';
  export let data;
  const analyticsId = data.ANALYTICS_ID_ICONS

  $: activeUrl = $page.url.pathname;
  const title = 'Svelte CoreUI Icons';
  let divClass = 'w-full ml-auto lg:block lg:w-auto order-1 lg:order-none';
  let ulClass =
    'flex flex-col py-3 my-4 lg:flex-row lg:my-0 text-sm font-medium gap-4 dark:lg:bg-transparent lg:bg-white lg:border-0';

  afterNavigate(() => {
    document.getElementById('svelte')?.scrollTo({ top: 0 });
  });
</script>

<Runatics {analyticsId} />
<MetaTags
  {title}
  description="CoreUI icon set for Svelte"
  openGraph={{
    type: 'website',
    url: 'https://svelte-coreui-icons.vercel.app/',
    title: 'Svelte CoreUI Icons',
    description: 'CoreUI icon set for Svelte',
    images: [
      {
        url: 'https://open-graph-vercel.vercel.app/api/svelte-coreui-icons',
        width: 1200,
        height: 630,
        alt: 'Svelte CoreUI Icons'
      }
    ],
    siteName: 'Svelte CoreUI Icons'
  }}
  twitter={{
    handle: '@shinokada',
    cardType: 'summary_large_image',
    title: 'Svelte CoreUI Icons',
    description: 'CoreUI icon set for Svelte',
    image: 'https://open-graph-vercel.vercel.app/api/svelte-coreui-icons',
    imageAlt: 'Svelte CoreUI Icons'
  }}
/>

<div class="max-h-screen overflow-auto relative w-full" id="svelte">
  <header
    class="sticky top-0 z-40 flex-none w-full mx-auto bg-white border-b border-gray-200 dark:border-gray-600 dark:bg-sky-950"
  >
    <Navbar color="default" fluid let:hidden let:toggle class="dark:bg-stone-950 ">
      <NavBrand href="/">
        <span
          class="self-center whitespace-nowrap text-2xl font-semibold text-primary-900 dark:text-primary-500"
        >
          {title}
        </span>
      </NavBrand>
      <NavUl
        {activeUrl}
        {hidden}
        {divClass}
        {ulClass}
        on:click={() => setTimeout(toggle, 1)}
        nonActiveClass="md:!pl-3 md:!py-2 lg:!pl-0 text-gray-700 hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 dark:text-white lg:dark:hover:text-primary-700 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
        activeClass="md:!pl-3 md:!py-2 lg:!pl-0 lg:text-primary-700 text-white dark:text-white dark:lg:text-primary-500 bg-primary-700 lg:bg-transparent dark:bg-primary-600 lg:dark:bg-transparent cursor-default"
      >
        <NavLi class="lg:px-2 lg:mb-0" href="/" data-sveltekit-reload>Home</NavLi>
        <NavLi class="lg:px-2 lg:mb-0" href="/brand">Brand</NavLi>
        <NavLi class="lg:px-2 lg:mb-0" href="/flag">Flag</NavLi>
        <NavLi class="lg:px-2 lg:mb-0" href="/free">Free</NavLi>
        <NavLi class="lg:px-2 lg:mb-0" href="https://github.com/shinokada/svelte-coreui-icons"
          >GitHub</NavLi
        >
        <NavLi href="https://svelte-svg-icons.codewithshin.com/">Icon sets</NavLi>
      </NavUl>
      <div class="flex items-center ml-auto">
        <DarkMode class="inline-block dark:hover:text-white hover:text-gray-900" />
      </div>
      <NavHamburger on:click={toggle} class="ml-3 m-0 lg:hidden md:block" />
    </Navbar>
  </header>
  <div class="mx-8 mb-16">
    <slot />
  </div>

  <Footer footerType="logo" class="dark:bg-stone-950">
    <div class="sm:flex sm:items-center sm:justify-between">
      <FooterBrand
        href="https://svelte-coreui-icons.vercel.app/"
        name="Svelte Coreui Icons"
        classSpan="text-primary-700 dark:text-primary-500"
      />
      <FooterLinkGroup
        ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
      >
        <FooterLink href="/" data-sveltekit-reload>Home</FooterLink>
        <FooterLink href="/brand">Brand</FooterLink>
        <FooterLink href="/flag">Flag</FooterLink>
        <FooterLink href="/free">Free</FooterLink>
        <FooterLink href="https://github.com/shinokada/svelte-coreui-icons/blob/main/LICENSE"
          >Licensing</FooterLink
        >
        <FooterLink href="https://github.com/shinokada/svelte-coreui-icons/">GitHub</FooterLink>
      </FooterLinkGroup>
    </div>
  </Footer>
</div>
