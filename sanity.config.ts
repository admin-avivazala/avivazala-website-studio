import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { structure } from './studio/structure';

export default defineConfig({
  name: 'default',
  title: 'Avivazala ' + process.env.NODE_ENV?.substring(0, 3),

  projectId: 'qkrkmcx4',
  dataset: process.env.SANITY_DATASET || 'development',

  plugins: [
    structureTool({ structure }),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },

});
