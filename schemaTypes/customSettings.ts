import { defineField, defineType } from 'sanity'
import { GrSettingsOption } from "react-icons/gr";

export default defineType({
  title: 'Custom Settings',
  name: 'customSettings',
  type: 'document',
  icon: GrSettingsOption,
  fields: [
    defineField({
      name: 'key',
      title: 'Key',
      type: 'string',
    }),
    defineField({
      name: 'value',
      title: 'Value(s)',
      type: 'array',
      of: [{type: 'string'}]
    }),
  ],
  preview: {
    select: {
      title: 'key',
    }
  }
})
