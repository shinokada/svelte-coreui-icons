<script>
  import '../app.postcss';
  import { page } from '$app/stores';
  import DarkMode from 'flowbite-svelte/DarkMode.svelte';
  import Navbar from 'flowbite-svelte/Navbar.svelte';
  import NavBrand from 'flowbite-svelte/NavBrand.svelte';
  import NavLi from 'flowbite-svelte/NavLi.svelte';
  import NavUl from 'flowbite-svelte/NavUl.svelte';
  import NavHamburger from 'flowbite-svelte/NavHamburger.svelte';
  import Footer from 'flowbite-svelte/Footer.svelte'
  import FooterCopyright from 'flowbite-svelte/FooterCopyright.svelte'
  import FooterLinkGroup from 'flowbite-svelte/FooterLinkGroup.svelte'
  import FooterLink from 'flowbite-svelte/FooterLink.svelte'
  import { MetaTags } from 'svelte-meta-tags';

  $: activeUrl = $page.url.pathname;
</script>

<MetaTags
  title="Svelte CoreUI Icons"
  description="CoreUI icon set for Svelte"
  openGraph={{
    type: 'website',
    url: 'https://svelte-coreui-icons.vercel.app/',
    title: "Svelte CoreUI Icons",
    description: "CoreUI icon set for Svelte",
    images: [{ url: 'https://open-graph-vercel.vercel.app/api/svelte-coreui-icons', width: 1200, height: 630, alt: "Svelte CoreUI Icons" }],
    site_name: 'Svelte CoreUI Icons'
  }}
  twitter={{
    handle: '@shinokada',
    cardType: 'summary_large_image',
    title: "Svelte CoreUI Icons",
    description: "CoreUI icon set for Svelte",
    image:'https://open-graph-vercel.vercel.app/api/svelte-coreui-icons',
    imageAlt: "Svelte CoreUI Icons"
  }} />
  
<Navbar let:hidden let:toggle >
  <NavBrand href="/">
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Svelte CoreUI Icons
    </span>
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    <NavLi href="/" active={activeUrl === '/'}>Home</NavLi>
    <NavLi href="/brand" active={activeUrl === '/outline'}>Brand</NavLi>
    <NavLi href="/flag" active={activeUrl === '/solid'}>Flag</NavLi>
    <NavLi href="/free" active={activeUrl === '/solid'}>Free</NavLi>
    <NavLi href="/docs" active={activeUrl === '/docs'}>Docs</NavLi>
    <NavLi href="https://github.com/shinokada/svelte-coreui-icons">GitHub</NavLi>
    <NavLi href="https://svelte-svg-icons.vercel.app/">Icon sets</NavLi>
  </NavUl>
  <DarkMode />
</Navbar>
<div class="mx-16 mb-16">
  <slot />
</div>

<Footer class="dark:bg-gray-900">
  <FooterCopyright href="/" by="Svelte CoreUI Icons" year={2023} />
  <FooterLinkGroup ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
    <FooterLink href="/brand">Brand</FooterLink>
    <FooterLink href="/flag">Flag</FooterLink>
    <FooterLink href="/free">Free</FooterLink>
    <FooterLink href="/docs">Docs</FooterLink>
    <FooterLink href="https://github.com/shinokada/svelte-coreui-icons/blob/main/LICENSE">Licensing</FooterLink>
    <FooterLink href="https://github.com/shinokada/svelte-coreui-icons/">GitHub</FooterLink>
  </FooterLinkGroup>
</Footer>

