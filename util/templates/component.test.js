module.exports = (componentName) => ({
  content: `import React from "react";
import { render } from "@testing-library/react";

import ${componentName} , { ${componentName}Props } from "./${componentName}";

describe("Test Component", () => {
  let props: ${componentName}Props;

  const renderComponent = () => render(<${componentName} {...props} />);

  it("test", () => {
    props.foo = "test";
    const { getByTestId } = renderComponent();

    const component = getByTestId("${componentName}");

    expect(component).toHaveTextContent(props.foo);
  });
});
`,
  extension: `.test.tsx`
});
