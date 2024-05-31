module.exports = {
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Warn when non-variable color is used, except for CSS variable definitions',
            category: 'Best Practices',
            recommended: false,
        },
        schema: [], // no options
    },
    create(context) {
        return {
            Literal(node) {
                // regex to match 3-, 6-, and 8-digit hexadecimal, rgb, and rgba colors
                const colorRegex = /^#(?:[0-9a-fA-F]{3}){1,2}(?:[0-9a-fA-F]{2})?$|^rgb\((\s*\d+\s*,){2}\s*\d+\s*\)$|^rgba\((\s*\d+\s*,){3}\s*[\d\.]+\s*\)$/;
                const { value } = node;

                if (typeof value === 'string' && colorRegex.test(value)) {
                    let { parent } = node;

                    // Check if it is a CSS variable definition
                    while (parent) {
                        if (
                            parent.type === 'Property' &&
                            parent.key &&
                            parent.key.type === 'Identifier' &&
                            parent.key.name === '--'
                        ) {
                            return;
                        }
                        parent = parent.parent;
                    }

                    context.report({
                        node,
                        message: 'Avoid using non-variable colors directly.',
                    });
                }
            },
        };
    },
};
