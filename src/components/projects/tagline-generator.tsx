'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import { handleGenerateTagline } from '@/app/actions';
import type { Project } from '@/lib/types';

export function TaglineGenerator({ project, onTaglineGenerated }: { project: Project; onTaglineGenerated: (tagline: string) => void }) {
  const [isLoading, setIsLoading] = useState(false);

  const generateTagline = async () => {
    setIsLoading(true);
    try {
      const tagline = await handleGenerateTagline({
        projectName: project.title,
        projectDescription: project.description,
      });
      if (tagline) {
        onTaglineGenerated(tagline);
      }
    } catch (error) {
      console.error('Failed to generate tagline:', error);
      // Here you could use a toast to show an error to the user
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button onClick={generateTagline} disabled={isLoading} variant="outline" size="sm">
      <Sparkles className={`mr-2 h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
      {isLoading ? 'Generating...' : 'Generate AI Tagline'}
    </Button>
  );
}
