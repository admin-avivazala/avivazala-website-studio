import { defineField, defineType } from 'sanity'
import { baseLang } from '../lib/lang'
import { GrDriveCage } from "react-icons/gr";

export default defineType({
  title: 'Post Category',
  name: 'postCategory',
  type: 'document',
  icon: GrDriveCage,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localeString',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localeText',
    }),
  ],
  preview: {
    select: {
      title: `title.${baseLang.id}`,
    }
  }
})
