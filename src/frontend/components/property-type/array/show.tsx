import React from 'react'
import { Section, ValueGroup } from '@adminjs/design-system'

import { flat } from '../../../../utils'
import { convertToSubProperty } from './convert-to-sub-property'
import allowOverride from '../../../hoc/allow-override'
import { ShowPropertyProps } from '../base-property-props'
import { RecordJSON } from '../../../interfaces'

type Props = ShowPropertyProps & {
  ItemComponent: typeof React.Component;
}

const Show: React.FC<Props> = (props) => {
  const { property, record, ItemComponent } = props

  const items = flat.get(record.params, property.path) || []

  return (
    <ValueGroup label={property.label}>
      <Section>
        {(items || []).map((item, i) => {
          const itemProperty = convertToSubProperty(property, i)

          record.populated[itemProperty.path] = {
            // params: item,
            title: item.title || item.name || item.email || item.userName, // TODO change title
            recordActions: new Array(0),
          } as RecordJSON
          return (
            <ItemComponent
              {...props}
              key={itemProperty.path}
              property={itemProperty}
            />
          )
        })}
      </Section>
    </ValueGroup>
  )
}

export default allowOverride(Show, 'DefaultArrayShowProperty')
