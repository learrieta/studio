"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { generateDescriptionAction } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { Wand2 } from "lucide-react";
import { Skeleton } from "./ui/skeleton";

const formSchema = z.object({
  ideas: z.string().min(10, {
    message: "Please enter at least 10 characters to generate a description.",
  }),
});

export function DreamHomeGenerator() {
  const [generatedDescription, setGeneratedDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ideas: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setGeneratedDescription("");
    const result = await generateDescriptionAction({ ideas: values.ideas });
    setIsLoading(false);

    if (result.error) {
      toast({
        title: "Error",
        description: result.error,
        variant: "destructive",
      });
    } else if (result.description) {
      setGeneratedDescription(result.description);
    }
  }

  return (
    <Card className="max-w-3xl mx-auto">
      <CardContent className="p-6 md:p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="ideas"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold">Your Ideas</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., 'a bright, open kitchen with a large island, marble countertops, and a modern farmhouse sink...'"
                      className="min-h-[120px] text-base"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold" size="lg">
              <Wand2 className="mr-2 h-5 w-5" />
              {isLoading ? "Generating Your Dream..." : "Generate Description"}
            </Button>
          </form>
        </Form>

        {(isLoading || generatedDescription) && (
          <div className="mt-8 pt-6 border-t">
            <h3 className="text-2xl font-headline font-semibold text-primary mb-4">Your Dream Project</h3>
            {isLoading ? (
               <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-[75%]" />
               </div>
            ) : (
              <p className="whitespace-pre-wrap text-muted-foreground bg-secondary/30 p-4 rounded-md border">
                {generatedDescription}
              </p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
