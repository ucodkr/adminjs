"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSubpropertyPath = exports.getIndexFromSubpropertyPath = exports.convertToSubProperty = void 0;

var _constants = require("../../../../utils/flat/constants");

const getSubpropertyPath = (...params) => [...params].join(_constants.DELIMITER);

exports.getSubpropertyPath = getSubpropertyPath;

const getIndexFromSubpropertyPath = subpropertyPath => {
  const [, index] = subpropertyPath.split(_constants.DELIMITER);
  return parseInt(index, 10);
};
/**
 * Converts property: PropertyJSON from an array to a sub-property for an actual item in the array
 * It change path that it has index inside along with the label. Futhermore flat isArray is removed
 * ,because it was already handled, so that itemRenderer can render property as a regular one
 *
 * @param {PropertyJSON}  arrayProperty property with path set to an root Array type property,
 * @param {Number}        index         index under which sub-property should be placed
 * @private
 * @hide
 */


exports.getIndexFromSubpropertyPath = getIndexFromSubpropertyPath;

const convertToSubProperty = (arrayProperty, index) => ({ ...arrayProperty,

  /**
   * @ucodkr 20230323
   * array type select index is users.0.id
   */
  path: getSubpropertyPath(arrayProperty.path, index, 'id'),
  label: `[${index + 1}]`,
  isArray: false,
  isDraggable: false
});

exports.convertToSubProperty = convertToSubProperty;