import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allTemplates } from '@/lib/template-data'
import EditorLayout from '@/components/editor/EditorLayout'

interface EditorPageProps {
  params: Promise<{
    templateId: string
  }>
}

export async function generateMetadata({ params }: EditorPageProps): Promise<Metadata> {
  const { templateId } = await params
  const template = allTemplates.find((t) => t.id === templateId)
  
  return {
    title: template ? `Editing ${template.name} - BioDatawala` : 'Template Editor - BioDatawala',
    description: 'Customize your template with our easy-to-use online editor',
  }
}

export default async function EditorPage({ params }: EditorPageProps) {
  const { templateId } = await params
  
  // No authentication check - free for everyone
  const template = allTemplates.find((t) => t.id === templateId)
  
  if (!template) {
    notFound()
  }

  return <EditorLayout templateId={templateId} templateName={template.name} />
}

export async function generateStaticParams() {
  return allTemplates.map((template) => ({
    templateId: template.id,
  }))
}
