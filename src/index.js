
import babelPluginJsxSyntax from '@babel/plugin-syntax-jsx';

export default ({
  types: t
}) => {
  return {
    name: 'translate',
    inherits: babelPluginJsxSyntax,
    visitor: {
      FunctionDeclaration: {
        exit(path) {

        }
      },
      JSXElement(path, stats) {

        if(path.node.openingElement.name.name == "Trans"){
          console.log("path:");
          console.log(path.node.openingElement.name.name);
          path.node.openingElement.name.name = "span";
          path.node.closingElement.name.name = "span";
        }
        /*
        if (skip) {
          return;
        }

        const filename = stats.file.opts.filename;

        if (stats.opts.exclude && isFilenameExcluded(filename, stats.opts.exclude)) {
          return;
        }

        let attributeNames = optionsDefaults.attributeNames;

        if (stats.opts && stats.opts.attributeNames) {
          attributeNames = Object.assign({}, attributeNames, stats.opts.attributeNames);
        }

        const attributes = path.node.openingElement.attributes
          .filter((attribute) => {
            return typeof attribute.name !== 'undefined' && typeof attributeNames[attribute.name.name] === 'string';
          });

        if (attributes.length === 0) {
          return;
        }

        const {
          handleMissingStyleName = optionsDefaults.handleMissingStyleName,
          autoResolveMultipleImports = optionsDefaults.autoResolveMultipleImports
        } = stats.opts || {};

        const spreadMap = createSpreadMapper(path, stats);

        for (const attribute of attributes) {
          const destinationName = attributeNames[attribute.name.name];

          const options = {
            autoResolveMultipleImports,
            handleMissingStyleName
          };

          if (t.isStringLiteral(attribute.value)) {
            resolveStringLiteral(
              path,
              filenameMap[filename].styleModuleImportMap,
              attribute,
              destinationName,
              options
            );
          } else if (t.isJSXExpressionContainer(attribute.value)) {
            if (!filenameMap[filename].importedHelperIndentifier) {
              setupFileForRuntimeResolution(path, filename);
            }
            replaceJsxExpressionContainer(
              t,
              path,
              attribute,
              destinationName,
              filenameMap[filename].importedHelperIndentifier,
              filenameMap[filename].styleModuleImportMapIdentifier,
              options
            );
          }

          if (spreadMap[destinationName]) {
            handleSpreadClassName(
              path,
              destinationName,
              spreadMap[destinationName]
            );
          }
          */
        
      },
    }
  };
}