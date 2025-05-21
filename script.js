document.addEventListener('DOMContentLoaded', function() {
  const editor = document.getElementById('editor');
  const preview = document.getElementById('preview');

  // Default Markdown content
  const defaultMarkdown = `
# 欢迎来到我的 Markdown 预览器!

## 这是一个副标题...
### 这里还有一些很酷的东西:

这是一些行内代码, \`<div></div>\`, 在两个反引号之间。

\`\`\`javascript
// 这是多行代码块:

function anotherExample(firstLine, lastLine) {
if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
  return multiLineCode;
}
}
\`\`\`

你也可以让文字变成 **粗体**... 哇!
或者 _斜体_.
或者... 等一下... **_两者都有!_**
你也可以随意使用 ~~删除线~~.

这里还有 [链接](https://www.freecodecamp.org), 和
> 块引用!

如果你想玩点更疯狂的，甚至还有表格:

狂野头部 | 疯狂头部 | 另一个头部?
------------ | ------------- | -------------
你的内容可以 | 在这里，它 | 也可以在这里....
还有这里。 | 好吧。 | 我想我们明白了。

- 当然还有列表。
- 有些是项目符号列表。
   - 有不同的缩进级别。
      - 像这样。


1. 当然也有数字列表。
1. 如果你愿意，可以只用 1!
1. 最后但同样重要的是，不要忘记嵌入图片:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `;

  // Initialize Marked.js with options
  // Deprecated: marked.setOptions({ breaks: true, gfm: true });
  // New way for marked v5+: pass options to marked.parse() or use marked.use()
  const markedOptions = {
      breaks: true, // For User Story Bonus: Interpret carriage returns as <br>
      gfm: true     // For User Story #4: GitHub Flavored Markdown
  };

  // Function to update preview
  function updatePreview() {
      const markdownText = editor.value;
      preview.innerHTML = marked.parse(markdownText, markedOptions);
  }

  // Set initial content for editor and render preview
  editor.value = defaultMarkdown;
  updatePreview();

  // Add event listener for input changes in editor
  editor.addEventListener('input', updatePreview);
});
