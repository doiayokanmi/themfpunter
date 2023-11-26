import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import {project, booking} from './sanity/schema/project-schema'

const config = defineConfig({
    projectId: 'ud31hd31',
    dataset: 'production',
    title: 'Best Tips',
    apiVersion: '2023-10-23',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: { types: [project, booking]},
})

export default config