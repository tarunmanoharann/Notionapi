import { Client } from '@notionhq/client'
import { Template } from '@/types'

const notion = new Client({ auth: process.env.NOTION_API_KEY })

export async function getTemplates(): Promise<Template[]> {
  // Replace with your actual database ID
  const databaseId = process.env.NOTION_DATABASE_ID

  try {
    const response = await notion.databases.query({
      database_id: databaseId!,
    })

    return response.results.map((page: any) => ({
      id: page.id,
      title: page.properties.Name.title[0].plain_text,
      category: page.properties.Category.select.name,
      image: page.properties.Image.files[0]?.file.url || '/placeholder.jpg',
    }))
  } catch (error) {
    console.error('Error fetching templates from Notion:', error)
    return []
  }
}

export async function getTemplateById(id: string): Promise<Template | null> {
  try {
    const response = await notion.pages.retrieve({ page_id: id })
    return {
      id: response.id,
      title: response.properties.Name.title[0].plain_text,
      category: response.properties.Category.select.name,
      image: response.properties.Image.files[0]?.file.url || '/placeholder.jpg',
    }
  } catch (error) {
    console.error('Error fetching template from Notion:', error)
    return null
  }
}