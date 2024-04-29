import { defineField, defineType } from 'sanity'
import { baseLang } from '../lib/lang'
import { GrSettingsOption } from "react-icons/gr";

export default defineType({
  title: 'Settings',
  name: 'settings',
  type: 'document',
  icon: GrSettingsOption,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'value',
      title: 'Value',
      type: 'array',
      of: [{type: 'string'}]
    }),
  ],
  preview: {
    select: {
      title: `title.${baseLang.id}`,
    }
  }
})
