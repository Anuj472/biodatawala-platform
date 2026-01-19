import { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { auth } from '@/lib/auth';
import { allTemplates } from '@/lib/template-data';
import EditorLayout from '@/components/editor/EditorLayout';

interface EditorPageProps {
  params: {
    templateId: string;
  };
}

export async function generateMetadata({ params }: EditorPageProps): Promise<Metadata> {
  const template = allTemplates.find((t) => t.id === params.templateId);
  
  return {
    title: template ? `Editing ${template.name} - BioDatawala` : 'Template Editor - BioDatawala',
    description: 'Customize your template with our easy-to-use online editor',
  };
}

export default async function EditorPage({ params }: EditorPageProps) {
  // Check authentication
  const session = await auth();
  
  if (!session?.user) {
    redirect('/login');
  }

  // Verify template exists
  const template = allTemplates.find((t) => t.id === params.templateId);
  
  if (!template) {
    notFound();
  }

  return <EditorLayout templateId={params.templateId} templateName={template.name} />;
}

export async function generateStaticParams() {
  return allTemplates.map((template) => ({
    templateId: template.id,
  }));
}
