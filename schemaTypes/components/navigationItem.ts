import { defineField, defineType } from 'sanity';
import { GrNavigate } from "react-icons/gr";
import { baseLang } from '../../lib/lang';

export default defineType({
  title: 'Navigation Item',
  name: 'navigationItem',
  type: 'object',
  icon: GrNavigate,
  fields: [
    defineField({
      title: "Navigation Text",
      name: "title",
      type: "localeString"
    }),
    defineField({
      title: "Navigation Item URL",
      name: "navigationItemUrl",
      type: "navigationLink"
    })
  ],
  preview: {
    select: {
      title: `title.${baseLang.id}`,
    }
  }
})