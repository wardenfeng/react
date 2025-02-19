---
title: CounterLabel
tags: pill
---

Use the CounterLabel component to add a count to navigational elements and buttons.

## Default example

```jsx live
<CounterLabel>12</CounterLabel>
<CounterLabel scheme="primary">13</CounterLabel>
<CounterLabel scheme="secondary">13</CounterLabel>
```

## System props

<Note variant="warning">

System props are deprecated in all components except [Box](/Box). Please use the [`sx` prop](/overriding-styles) instead.

</Note>

CounterLabel components get `COMMON` system props. Read our [System Props](/system-props) doc page for a full list of available props.

## Component props

| Name   | Type   | Default | Description                                                                                                                                                                        |
| :----- | :----- | :-----: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| scheme | String |         | Pass in 'primary' for a darker background and inverse text, or 'gray-light' for a lighter background and primary text. Omitting the scheme prop renders the default counter scheme |
