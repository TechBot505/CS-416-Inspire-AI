"use client";
import React, { useState } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { chatSession } from "@/utils/AiModels";
import { db } from "@/utils/DB";
import { AIOutput } from "@/utils/Schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";

interface PROPS {
  params: {
    "template-slug": string;
  };
}

function CreateNewContent(props: PROPS) {
  const [loading, setLoading] = useState<boolean>(false);
  const [aiResponse, setAiResponse] = useState<string>("");

  const { user } = useUser();

  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (template) => template.slug === props.params["template-slug"]
  );

  /**
   * Used to generate content from AI
   * @param formData
   * @returns
   */
  const generateAIContent = async (formData: any) => {
    setLoading(true);
    const prompt = selectedTemplate?.aiPrompt;
    const finalPrompt = JSON.stringify(formData) + ", " + prompt;
    const result = await chatSession.sendMessage(finalPrompt);
    setAiResponse(result?.response.text());
    await SaveOutput(
      JSON.stringify(formData),
      selectedTemplate?.slug,
      result?.response.text()
    );
    setLoading(false);
  };

  const SaveOutput = async (formData: any, slug: any, aiResponse: string) => {
    const result = await db.insert(AIOutput).values({
      formData: formData,
      templateSlug: slug,
      aiResponse: aiResponse,
      createdBy: user?.primaryEmailAddress?.emailAddress,
      createdAt: moment().format("YYYY-MM-DD"),
    });

    console.log(result);
  };

  return (
    <div className="flex flex-col p-5 h-full dark:bg-darkPrimary bg-slate-100">
      <div className="w-5">
        <Link href="/dashboard">
          <Button className="flex gap-2 dark:text-white">
            <ArrowLeft />
            Back
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 py-5">
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => {
            generateAIContent(v);
          }}
          loading={loading}
        />
        <div className="md:col-span-2 lg:col-span-2">
          <OutputSection aiResponse={aiResponse} />
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent;
