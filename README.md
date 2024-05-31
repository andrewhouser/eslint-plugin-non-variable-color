# eslint-plugin-non-variable-color

Custom ESLint rule that warns against the use of color values over css color variables

## Installation

Install ESLint and eslint-plugin-non-variable-color:

```bash
npm install eslint eslint-plugin-non-variable-color --save-dev
```

## Configuration

In your eslint configuration file, add `non-variable-color` to the plugins section and configure the rule under rules:

```json
{
  "plugins": ["non-variable-color"],
  "rules": {
    "non-variable-color/discourage-non-variable-color": "warn"
  }
}
```
