# Include HTML Files In HTML – Includer.js

Includer.js is a tiny JavaScript library that enables you to inject HTML content into the current page from external HTML files via XMLHttpRequest.

The main goal of this library is to include HTML pages with no PHP required, just as embedding JavaScript and CSS3 into the document.

## How to use it:

1. Load the Includer.js library in the document.

```html
<script src="https://unpkg.com/includerjs@2.0.0/dist/includer-2.0.0.bundle.js"></script>
```

2. Add the <include> component to the page and specify the path to the external HTML files.

```html
<include src="header.html"></include>
```

```html
<include src="footer.html"></include>
```

### Logger

If you wan't to enable the logger, then just add the `includer-log="true"` in your body tag.

Example:

```html
<body includer-log="true">
  ...
</body>
```

# Preview:

![Image](https://i0.wp.com/www.cssscript.com/wp-content/uploads/2022/10/include-html-file.webp?fit=746%2C568&ssl=1)
