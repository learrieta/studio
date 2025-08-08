"use client";

import { useState, useTransition } from 'react';
import { generateDescriptionAction } from '@/app/actions';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import { Sparkles } from 'lucide-react';
import { Skeleton } from './ui/skeleton';

export function DreamHomeGenerator() {
  const [isPending, startTransition] = useTransition();
  const [description, setDescription] = useState("");
  const [ideas, setIdeas] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setDescription("");
    startTransition(async () => {
      const result = await generateDescriptionAction({ ideas });
      if (result.error) {
        setError(result.error);
      } else if (result.description) {
        setDescription(result.description);
      }
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Textarea
              placeholder="e.g., an open-concept kitchen with a large marble island, gold fixtures, and dark green cabinets..."
              value={ideas}
              onChange={(e) => setIdeas(e.target.value)}
              rows={4}
              disabled={isPending}
            />
            <Button type="submit" disabled={isPending || !ideas} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
              {isPending ? (
                "Generating..."
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Generate Description
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {isPending && (
         <Card className="mt-6">
          <CardContent className="p-6 space-y-4">
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </CardContent>
        </Card>
      )}

      {error && (
        <p className="mt-4 text-center text-destructive">{error}</p>
      )}

      {description && !isPending && (
        <Card className="mt-6 animate-in fade-in-50">
          <CardContent className="p-6">
             <h3 className="font-headline text-lg font-semibold text-primary mb-2">Your Dream Project</h3>
            <p className="text-foreground whitespace-pre-wrap">{description}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
