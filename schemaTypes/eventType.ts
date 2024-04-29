import { defineField, defineType } from 'sanity'
import { baseLang } from '../lib/lang'
import { GrDirections } from "react-icons/gr";

export default defineType({
  title: 'Event Type',
  name: 'eventType',
  type: 'document',
  icon: GrDirections,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localeString',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localeBlockContent',
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      description: 'If this will be visible in your websiste',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: `title.${baseLang.id}`,
    }
  }
})
