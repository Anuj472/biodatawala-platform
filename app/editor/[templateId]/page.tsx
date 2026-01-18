import { Metadata } from 'next';
import EditorLayout from '@/components/editor/EditorLayout';

interface EditorPageProps {
  params: {
    templateId: string;
  };
}

export const metadata: Metadata = {
  title: 'Template Editor - BioDatawala',
  description: 'Customize your template with our easy-to-use online editor',
};

export default function EditorPage({ params }: EditorPageProps) {
  return <EditorLayout templateId={params.templateId} />;
}
