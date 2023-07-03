<h1 align="center">Svelte Coreui Icons</h1>

<p align="center">
<a href="https://github.com/shinokada/svelte-coreui-icons">Svelte-Coreui-Icons</a>
</p>

<p align="center">
<a href="https://github.com/sponsors/shinokada" target="_blank"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" height="25"></a>
<a href="https://www.npmjs.com/package/svelte-coreui-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/v/svelte-coreui-icons" alt="npm" height="25"></a>
<a href="https://twitter.com/shinokada" rel="nofollow" target="_blank"><img src="https://img.shields.io/badge/created%20by-@shinokada-4BBAAB.svg" alt="Created by Shin Okada" height="25"></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow" target="_blank"><img src="https://img.shields.io/github/license/shinokada/svelte-coreui-icons" alt="License" height="25"></a>
<a href="https://www.npmjs.com/package/svelte-coreui-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/dw/svelte-coreui-icons.svg" alt="npm" height="25"></a>
</p>

[Coreui Icons](https://github.com/coreui/coreui-icons) for Svelte.

Thank you for considering my open-source package. If you use it in a commercial project, please support me by sponsoring me on GitHub: https://github.com/sponsors/shinokada. Your support helps me maintain and improve this package for the benefit of the community.

<p align="center">
<img src="https://raw.githubusercontent.com/shinokada/svelte-coreui-icons/main/static/images/coreui-brand-color-450.webp" width="450" />
</p>

## Installation

```sh
npm i -D svelte-coreui-icons
```

## Icon list

[Icon list](/icon-list.md)

## Icon images

[Icon images](/icon-images.md)

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

## REPL

- [REPL Brand color](https://svelte.dev/repl/ac949cb9d7724e1880ba3eedbb6451d3?version=4.0.1)
- [REPL Brand mono](https://svelte.dev/repl/3184ec4ba05949d2be244dada275ef19?version=4.0.1)
- [REPL Flag](https://svelte.dev/repl/7577675a430342d9a8e45767fec9240e?version=4.0.1)
- [REPL Free color](https://svelte.dev/repl/377e91aa08364ea79d0c2831ae27ea9d?version=4.0.1)
- [REPL Free mono](https://svelte.dev/repl/83d5b74b88a6413786750e7ae1418d8b?version=4.0.1)

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
