import marked from "marked";
import { useState } from "react";
import "./App.css";

const initialState = `
  This is a paragraph
  **This is bolded text**

  # Heading 1
  ## Heading 2

  - list item 1
  - list item 2

  [visit](https://google.com)

  This is a inline \`<div></div>\`

  This is a block of code

  \`\`\`
    let a = 1;
  \`\`\`

  ![Image](https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg)
`;

function App() {
  const [markdown, setMarkdown] = useState(initialState);
  const result = marked(markdown, { breaks: true });

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="app">
      <h1 className="title">Covert your markdown</h1>
      <div className="container">
        <div className="left">
          <h3>Enter your markdown: </h3>
          <textarea id="editor" value={markdown} onChange={handleChange} />
        </div>
        <div className="right">
          <h3>Result: </h3>
          <div
            className="preview"
            id="preview"
            dangerouslySetInnerHTML={{ __html: result }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
