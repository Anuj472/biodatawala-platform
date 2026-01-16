import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  subscription_tier: 'free' | 'premium_monthly' | 'premium_yearly';
  subscription_expires?: string;
  created_at: string;
  updated_at: string;
}

export interface Document {
  id: string;
  user_id: string;
  template_id: string;
  category: string;
  title: string;
  data: any; // JSON data
  thumbnail?: string;
  created_at: string;
  updated_at: string;
}

export interface Download {
  id: string;
  user_id: string;
  document_id: string;
  format: 'pdf' | 'jpg' | 'png';
  created_at: string;
}

// Helper functions
export async function getUserDocuments(userId: string) {
  const { data, error } = await supabase
    .from('documents')
    .select('*')
    .eq('user_id', userId)
    .order('updated_at', { ascending: false });

  if (error) throw error;
  return data as Document[];
}

export async function saveDocument(document: Omit<Document, 'id' | 'created_at' | 'updated_at'>) {
  const { data, error } = await supabase.from('documents').insert(document).select().single();

  if (error) throw error;
  return data as Document;
}

export async function updateDocument(id: string, updates: Partial<Document>) {
  const { data, error } = await supabase
    .from('documents')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data as Document;
}

export async function deleteDocument(id: string) {
  const { error } = await supabase.from('documents').delete().eq('id', id);

  if (error) throw error;
}

export async function recordDownload(download: Omit<Download, 'id' | 'created_at'>) {
  const { data, error } = await supabase.from('downloads').insert(download).select().single();

  if (error) throw error;
  return data as Download;
}

export async function getUserDownloadCount(userId: string, since?: Date) {
  let query = supabase
    .from('downloads')
    .select('id', { count: 'exact', head: true })
    .eq('user_id', userId);

  if (since) {
    query = query.gte('created_at', since.toISOString());
  }

  const { count, error } = await query;

  if (error) throw error;
  return count || 0;
}
