# Svelte Coreui Icons

<div class="flex justify-center gap-2 my-8">
<a href="https://github.com/sponsors/shinokada" target="_blank"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" height="25" style="height: 25px !important;"></a>
<a href="https://www.npmjs.com/package/svelte-coreui-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/v/svelte-coreui-icons" alt="npm" height="25" style="height: 25px !important;"></a>
<a href="https://twitter.com/shinokada" rel="nofollow" target="_blank"><img src="https://img.shields.io/badge/created%20by-@shinokada-4BBAAB.svg" alt="Created by Shin Okada" height="25" style="height: 25px !important;"></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow" target="_blank"><img src="https://img.shields.io/github/license/shinokada/svelte-coreui-icons" alt="License" height="25" style="height: 25px !important;"></a>
<a href="https://www.npmjs.com/package/svelte-coreui-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/dw/svelte-coreui-icons.svg" alt="npm" height="25" style="height: 25px !important;"></a>
</div>

[Coreui Icons](https://github.com/coreui/coreui-icons) for Svelte.

Thank you for considering my open-source package. If you use it in a commercial project, please support me by sponsoring me on GitHub: https://github.com/sponsors/shinokada. Your support helps me maintain and improve this package for the benefit of the community.

## Repo

[GitHub Repo](https://github.com/shinokada/svelte-coreui-icons)

## Installation

```sh
pnpm i -D svelte-coreui-icons
```

## Usage

In a svelte file:

```html
<script>
  import { Cib500px } from 'svelte-coreui-icons';
</script>

<Cib500px />
<Activity />
<Airplay />
```

## Faster compiling

If you need only a few icons from this library in your Svelte app, import them directly. This can optimize compilation speed and improve performance by reducing the amount of code processed during compilation.

```html
<script>
  import Cib500px from 'svelte-coreui-icons/Cib500px.svelte';
</script>

<Cib500px />
```

If you are a TypeScript user, install **typescript version 5.0.0 or above**.

As of March 2023, the `typescript@beta` version is now available:

```sh
pnpm i -D typescript@beta
```

To avoid any complaints from the editor, add `node16` or `nodenext` to `moduleResolution` in your tsconfig.json file.

```json
{
  //...
  "compilerOptions": {
    // ...
    "moduleResolution": "nodenext"
  }
}
```


## Props

- size = '24';
- role = 'img';
- color = 'currentColor';

## IDE support

If you are using an LSP-compatible editor, such as VSCode, Atom, Sublime Text, or Neovim, hovering over a component name will display a documentation link, features, props, events, and an example.

## Size

Use the `size` prop to change the size of icons.

```html
<script>
  import { Cib500px } from 'svelte-coreui-icons';
</script>

<Cib500px size="30" />
```

If you are using Tailwind CSS, you can add a custom size using Tailwind CSS by including the desired classes in the `class` prop. For example:

```html
<Cib500px class="shrink-0 h-20 w-20" />
```

## CSS HEX Colors

Use the `color` prop to change colors with HEX color code.

```html
<script>
  import { Cib500px } from 'svelte-coreui-icons';
</script>

<Cib500px color="#c61515" />
```

## CSS frameworks suport

Use the `class` prop to change colors and add additional css.

Tailwind example:

```html
<script>
  import { Cib500px } from 'svelte-coreui-icons';
</script>

<Cib500px class="text-blue-700 mr-4" />
```

Bootstrap example:

```html
<Cib500px class="position-absolute top-0 px-1" />
```

## Dark mode with Tailwind CSS

If you are using the dark mode on your website with Tailwind CSS, add your dark mode class to the `class` prop.

Let's use `dark` for the dark mode class as an example.

```html
<script>
  import { Cib500px } from 'svelte-coreui-icons';
</script>

<Cib500px class="text-blue-700 dark:text-red-500" />
```

## aria-label

All icons have aria-label. For example `Cib500px` has `aria-label="cib 500px"`.
Use `ariaLabel` prop to modify the `aria-label` value.

```html
<Cib500px ariaLabel="my aria label" />
```

## Unfocusable icon

If you want to make an icon unfocusable, add `tabindex="-1"`.

```html
<Cib500px tabindex="-1" />
```

## Events

All icons have the following events:

- on:click
- on:keydown
- on:keyup
- on:focus
- on:blur
- on:mouseenter
- on:mouseleave
- on:mouseover
- on:mouseout

## Passing down other attributes

You can pass other attibutes as well.

```html
<Cib500px tabindex="0" />
```

## Using svelte:component

```html
<script>
  import { Cib500px } from 'svelte-coreui-icons';
</script>

<svelte:component this="{Cib500px}" />
```

## Using onMount

```html
<script>
  import { Cib500px } from 'svelte-coreui-icons';
  import { onMount } from 'svelte';
  const props = {
    size: '50',
    color: '#ff0000'
  };
  onMount(() => {
    const icon = new Cib500px({ target: document.body, props });
  });
</script>
```

## Import all

Use `import * as Icon from 'svelte-coreui-icons`.

```html
<script>
  import * as Icon from 'svelte-coreui-icons';
</script>

<h1>Size</h1>
<Icon.Cib500px size="30" />
<Icon.Cib500px size="40" />
<Icon.Cib500px size="50" />

<h1>CSS HEX color</h1>
<Icon.Cib500px color="#c61515" size="40" />

<h1>Tailwind CSS</h1>
<Icon.Cib500px class="text-blue-500" />
<Icon.Cib500px class="text-pink-700" />
```

## Other icons

- [Svelte-Icon-Sets](https://svelte-svg-icons.vercel.app/)
