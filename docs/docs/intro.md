---
sidebar_position: 1
---

# Includer.js

A Javascript library for including other **HTML** files into one single **HTML** file.

### 📦 Installation

You can use the CDN or download the [Javascript](https://cdn.hypll.org/services/programing/includerjs/includer.min.js) file.

#### CDN

```bash
https://unpkg.com/includerjs@0.0.7/dist/includer-0.0.7.bundle.js
```

#### Script

```html
<script src="https://unpkg.com/includerjs@0.0.7/dist/includer-0.0.7.bundle.js"></script>
```

##### Quick Example:

```html
<include path="components/navbar.html"></include>
```

So in this example you see the `path` attribute. This is where your path to your html file is.

Root Example

```shell
components/
        └── navbar.html
index.html
```
