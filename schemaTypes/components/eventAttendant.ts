import { defineField, defineType } from 'sanity';
import { GrUserFemale } from "react-icons/gr";

export default defineType({
  title: "Event Attendant",
  name: "eventAttendant",
  type: "object",
  icon: GrUserFemale,
  fields: [
    defineField({
      title: "fullName",
      name: "fullName",
      type: "string"
    }),
    defineField({
      title: "Email",
      name: "email",
      type: "email",
    }),
    defineField({
      title: "Phone",
      name: "phone",
      type: "string"
    }),
  ]
})