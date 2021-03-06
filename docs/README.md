
# scifi

## Install

```bash
yarn add scifi
```

## Usage

With a bundler:

```js
import scifi from 'scifi'

// Sci-fi it!
scifi(document.getElementById('node'))
```

Or directly use in browser:

```html
<script src="https://unpkg.com/scifi"></script>
<script>
  scifi(document.getElementById('node'))
</script>
```

## API

### scifi(element, [options])

#### element

Type: `HTMLElement`

#### options

##### options.chars

Type: `string`<br>
Default: `[en]`

The characters where we get random char, it supports keywords like `[en]`.

The list of keywords:

- `[en]`: All English characters including punctuation marks.
- `[kanji]`: Japanese kanji.
- `[hiragana]`: Japanese hiragana.
- `[katakana]`: Japanese katakana.
- `[ua]`: Ukrainian.
- `[a-z]`: Characters from `a` to `z`.
- `[A-Z]`: Characters from `A` to `Z`.
- `[a-zA-Z]`: Characters from `a` to `z` and `A` to `Z`.

##### options.content

Type: `string`<br>
Default: `element.textContent`

The final content to show.

##### options.scifiSpeed

Type: `number`<br>
Default: `20`

Shuffle speed.

##### options.exposeDelay

Type: `number`<br>
Default: `100`

Wait this amount of time to replace random char with actual char.

##### options.keepChars

Type: `array`<br>
Default: `[' ']`

Characters which should never be displayed as scifi text.

