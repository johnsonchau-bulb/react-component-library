module.exports = (componentName) => ({
  content: `import React from "react";
import ${componentName} from "./${componentName}";

export default {
    title: "${componentName}"
};

export const Normal${componentName} = () => <${componentName} foo="bar" />;
`,
  extension: `.stories.tsx`
});
