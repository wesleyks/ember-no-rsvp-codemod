const { getParser } = require('codemod-cli').jscodeshift;

const RSVP_PACKAGE = 'rsvp';
const SPECIFIERS_TO_REMOVE = ['Promise', 'reject', 'resolve'];
const SPECIFIERS_TO_REFACTOR = ['reject', 'resolve'];

module.exports = function transformer(file, api) {
  const j = getParser(api);
  const root = j(file.source);

  return root
    .find(j.ImportSpecifier)
    .forEach((path) => {
      const specifierName = path.value.imported.name;
      const specifierLocalName = path.value.local.name;
      const packageName = path.parent.value.source.value;

      const shouldRemove =
        packageName === RSVP_PACKAGE && SPECIFIERS_TO_REMOVE.includes(specifierName);
      if (!shouldRemove) {
        return;
      }

      // transform usages
      if (SPECIFIERS_TO_REFACTOR.includes(specifierName)) {
        j(path)
          .closestScope()
          .find(j.Identifier, { name: specifierLocalName })
          .filter((p) => p.value.start !== path.value.local.start) // ignore the specifier identifier
          .filter((p) => !(p.parentPath.value.type === 'Property' && p.name === 'key'))
          .filter((p) => p.name !== 'property')
          .replaceWith(() => {
            return j.memberExpression(j.identifier('Promise'), j.identifier(specifierName));
          });
      }

      // remove import
      if (path.parent.value.specifiers.length === 1) {
        // if this is the last specifier we can remove the whole import declaration
        j(path.parent).remove();
      } else {
        j(path).remove();
      }
    })
    .toSource();
};

module.exports.type = 'js';
