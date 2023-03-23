import { DELIMITER } from '../../../../utils/flat/constants'
import { PropertyJSON } from '../../../interfaces'

export const getSubpropertyPath = (...params: any) => [...params].join(DELIMITER)
export const getIndexFromSubpropertyPath = (subpropertyPath: string) => {
  const [, index] = subpropertyPath.split(DELIMITER)
  return parseInt(index, 10)
}

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
export const convertToSubProperty = (arrayProperty: PropertyJSON, index: number): PropertyJSON => (
  {
    ...arrayProperty,
    /**
     * @ucodkr 20230323
     * array type select index is users.0.id
     */
    path: getSubpropertyPath(arrayProperty.path, index, 'id'),
    label: `[${index + 1}]`,
    isArray: false,
    isDraggable: false,
  }
)
