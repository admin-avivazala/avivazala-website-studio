import { defineField, defineType } from 'sanity'
import { supportedLanguages, baseLang } from '../lib/lang'
import { GrSettingsOption } from "react-icons/gr";

const languageIds = supportedLanguages.map(lang => lang.id);

export default defineType({
  title: 'Languages available',
  name: 'languagesAvailable',
  type: 'document',
  icon: GrSettingsOption,
  fields: [
    defineField({
      title: 'Languages of the website',
      name: 'languages',
      description: `Choose on of the following languages: ${languageIds.join(', ')}`,
      type: 'array',
      of: [{ type: 'string', options: { list: languageIds } }],
      initialValue: languageIds,
      validation: rule =>
        rule.min(1).max(languageIds.length).custom(fields => {
          if (!fields || !fields.length) {
            return 'There should be at least 1 language'
          }
          if (fields.filter(item => !languageIds.includes(item as string)).length > 0) {
            return 'Choose only available languages'
          }
          return true
        })
    }),
    defineField({
      title: 'Default website language',
      name: 'langDefault',
      type: 'array',
      of: [{ type: 'string', options: { list: languageIds } }],
      initialValue: [baseLang.id],
      validation: rule =>
        rule.length(1).custom(fields => {
          if (!fields || !fields.length) {
            return 'There should be at least 1 default language'
          }
          return true
        })
    })
  ]
})
