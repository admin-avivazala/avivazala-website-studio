import { defineField, defineType } from 'sanity';
import { GrNavigate } from "react-icons/gr";

export default defineType({
  title: 'Navigation',
  name: 'navigation',
  type: 'document',
  icon: GrNavigate,
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string"
    }),
    defineField({
      title: "Navigation Id",
      name: 'navId',
      type: 'slug',
      options: {
        source: 'title'
      }
    }),
    defineField({
      title: "Navigation items",
      name: "items",
      type: "array",
      of: [{ type: "navigationItem" }]
    })
  ]
})