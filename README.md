# Includer.js

A javascript liabry for including other **HTML** files into one single **HTML** file.

### Get started

<br>

<b>📦 Installation</b><br><br>
You can use the CDN or download the [Javascript](https://cdn.hypll.org/services/programing/includerjs/includer.min.js) file.

CDN

```
https://ungpkg.com/includerjs/0.0.1/includer.min.js
```

<b>🚀 Usage</b><br>

Using the `<include /> `tag.

Example:

```html
<include file="components/navbar.html" id="navbar" />
```

So in this example you see the `file` attribute. This is where your path to your html file is. Its required to give your `<include>` tag an id bcz then it will not appear on your site.

Root Example

```shell
components/
        └── navbar.html
index.html
```

⛔️ Errors

If your file don't includes `.html` you will get the following error:

```bash
Uncaught Error: The path to components/navbar.htl, must end with .html
```
