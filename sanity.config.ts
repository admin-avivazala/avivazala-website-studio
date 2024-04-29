import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { structure } from './studio/structure';

export default defineConfig({
  name: 'default',
  title: 'Avivazala',

  projectId: 'qkrkmcx4',
  dataset: 'production',

  plugins: [
    structureTool({ structure }),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },

});
