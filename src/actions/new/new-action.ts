import { populator } from '../../utils'
import { Action, RecordActionResponse } from '../action.interface'
import { paramConverter } from '../../utils/param-converter'

/**
 * @implements Action
 * @category Actions
 * @module NewAction
 * @description
 * Shows form for creating a new record
 * Uses {@link NewAction} component to render form
 * @private
 */
export const NewAction: Action<RecordActionResponse> = {
  name: 'new',
  isVisible: true,
  actionType: 'resource',
  icon: 'Add',
  showInDrawer: false,
  variant: 'primary',
  /**
   * Responsible for creating new record.
   *
   * To invoke this action use {@link ApiClient#resourceAction}
   *
   * @implements Action#handler
   * @memberof module:NewAction
   * @return {Promise<RecordActionResponse>} populated records
   */
  handler: async (request, response, context) => {
    const { resource, currentAdmin } = context
    if (request.method === 'post') {
      const params = paramConverter.prepareParams(request.payload ?? {}, resource)

      let record = await resource.build(params)

      record = await record.create()
      const [populatedRecord] = await populator([record])

      // eslint-disable-next-line no-param-reassign
      context.record = populatedRecord

      if (record.isValid()) {
        return {
          notice: {
            message: 'successfullyCreated',
            resourceId: resource.decorate().id(),
            type: 'success',
          },
          record: record.toJSON(currentAdmin),
        }
      }
      const baseMessage = populatedRecord.baseError?.message ?? 'thereWereValidationErrors'
      return {
        record: record.toJSON(currentAdmin),
        notice: {
          message: baseMessage,
          resourceId: resource.decorate().id(),
          type: 'error',
        },
      }
    }
    // TODO: add wrong implementation error
    throw new Error('new action can be invoked only via `post` http method')
  },
}

export default NewAction