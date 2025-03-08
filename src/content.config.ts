import { defineCollection, z } from 'astro:content'

const bentoGrids = defineCollection({
  schema: z.object({
    name: z.string().min(1, 'El nombre del componente es obligatorio.')
  })
})

export const collections = {
  bentoGrids
}
