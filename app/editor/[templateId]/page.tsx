import { Metadata } from 'next';
import Header from '@/components/common/Header';
import TemplateEditor from '@/components/editor/TemplateEditor';
import { allTemplates } from '@/lib/template-data';
import { notFound } from 'next/navigation';

interface EditorPageProps {
  params: {
    templateId: string;
  };
}

export async function generateMetadata({ params }: EditorPageProps): Promise<Metadata> {
  const template = allTemplates.find(t => t.id === params.templateId);
  
  if (!template) {
    return {
      title: 'Template Not Found',
    };
  }

  return {
    title: `Edit ${template.name} | BioDatawala`,
    description: `Customize and download ${template.name}. ${template.description}`,
  };
}

export default function EditorPage({ params }: EditorPageProps) {
  const template = allTemplates.find(t => t.id === params.templateId);

  if (!template) {
    notFound();
  }

  return (
    <>
      <Header />
      <TemplateEditor template={template} />
    </>
  );
}
