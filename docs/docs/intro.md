---
sidebar_position: 1
---

# Includer.js

A Javascript library for including other **HTML** files into one single **HTML** file.

### 📦 Installation

You can use the CDN or download the [Javascript](https://cdn.hypll.org/services/programing/includerjs/includer.min.js) file.

#### CDN

```bash
https://unpkg.com/includerjs@0.0.3/dist/includer-0.0.3.bundle.js
```

#### Script

```html
<script src="https://unpkg.com/includerjs@0.0.3/dist/includer-0.0.3.bundle.js"></script>
```

##### Quick Example:

```html
<include path="components/navbar.html" id="navbar"></include>
```

So in this example you see the `path` attribute. This is where your path to your html file is. Its required to give your `<include>` tag an id bcz then it will not appear on your site.

Root Example

```shell
components/
        └── navbar.html
index.html
```
