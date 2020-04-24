---
title: Flex
---

Flex is a component that will allow you to use flexbox properties.

_Previously, `Flex.Item` was used for flex item specific properties - we've added all properties to the `Flex` component, but are keeping Flex.Item around for backwards compatibility._

## Default example

```jsx live
<BorderBox width={300} height={300} borderRadius={0}>
  <Flex flexWrap="nowrap">
    <Box p={3} bg="blue.5">
      Item 1
    </Box>
    <Box p={3} bg="green.5">
      Item 2
    </Box>
    <Box p={3} bg="yellow.5">
      Item 3
    </Box>
  </Flex>
</BorderBox>
```

## Horizontal space between children

```jsx live
<BorderBox width={300} height={300} borderRadius={0}>
  <Flex gapX={[2, 3]}>
    <Box p={3} bg="blue.5">
      Item 1
    </Box>
    <Box p={3} bg="green.5">
      Item 2
    </Box>
    <Box p={3} bg="yellow.5">
      Item 3
    </Box>
  </Flex>
</BorderBox>
```

## Vertical space between children

```jsx live
<BorderBox width={300} height={300} borderRadius={0}>
  <Flex flexDirection="column" gapY={2}>
    <Box p={3} bg="blue.5">
      Item 1
    </Box>
    <Box p={3} bg="green.5">
      Item 2
    </Box>
    <Box p={3} bg="yellow.5">
      Item 3
    </Box>
  </Flex>
</BorderBox>
```

```jsx live
<BorderBox width={300} height={300} borderRadius={0}>
  <Flex flexDirection={['column', 'row']} gapX={[0, 2]} gapY={[2, 0]}>
    <Box p={3} bg="blue.5">
      Item 1
    </Box>
    <Box p={3} bg="green.5">
      Item 2
    </Box>
    <Box p={3} bg="yellow.5">
      Item 3
    </Box>
  </Flex>
</BorderBox>
```

## System props

Flex components get `FLEX`, `COMMON`, and `LAYOUT` system props.

Read our [System Props](/system-props) doc page for a full list of available props.

## Component props

`Flex` does not get any additional props other than the system props mentioned above.
