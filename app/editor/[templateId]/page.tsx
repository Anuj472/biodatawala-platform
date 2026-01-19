import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allTemplates } from '@/lib/template-data'
import EditorLayout from '@/components/editor/EditorLayout'

interface EditorPageProps {
  params: {
    templateId: string
  }
}

export async function generateMetadata({ params }: EditorPageProps): Promise<Metadata> {
  const template = allTemplates.find((t) => t.id === params.templateId)
  
  return {
    title: template ? `Editing ${template.name} - BioDatawala` : 'Template Editor - BioDatawala',
    description: 'Customize your template with our easy-to-use online editor',
  }
}

export default function EditorPage({ params }: EditorPageProps) {
  // No authentication check - free for everyone
  const template = allTemplates.find((t) => t.id === params.templateId)
  
  if (!template) {
    notFound()
  }

  return <EditorLayout templateId={params.templateId} templateName={template.name} />
}

export async function generateStaticParams() {
  return allTemplates.map((template) => ({
    templateId: template.id,
  }))
}
