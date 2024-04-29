import { defineField, defineType } from 'sanity'
import { baseLang } from '../lib/lang'
import { GrDocument } from "react-icons/gr";

export default defineType({
  title: 'Page',
  name: 'page',
  type: 'document',
  icon: GrDocument,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localeString',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'localeSlug',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: `title.${baseLang.id}`,
      media: 'mainImage',
    }
  },
})
