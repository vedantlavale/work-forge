import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

interface Faq1Props {
  heading?: string;
  items?: FaqItem[];
}

const Faq1 = ({
  heading = "Frequently asked questions",
  items = [
    {
      question: "How does the AI content generation work?",
      answer:
        "Our AI uses advanced natural language processing to understand your requirements and generate human-like content. Simply provide a topic, tone, and target audience, and our AI creates engaging content tailored to your needs.",
    },
    {
      question: "Can I customize the AI's writing style?",
      answer:
        "Yes! You can train the AI to match your brand voice by providing examples of your existing content. The AI learns your tone, style, and preferences to create consistent content across all your materials.",
    },
    {
      question: "What types of content can the AI create?",
      answer:
        "Our AI can generate blog posts, social media content, email campaigns, product descriptions, ad copy, landing page content, and much more. We support over 50 different content types.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes! We offer a 14-day free trial with access to all features. No credit card required. You can generate up to 10,000 words during your trial period.",
    },
    {
      question: "How accurate is the AI-generated content?",
      answer:
        "Our AI generates high-quality, factually accurate content 95% of the time. However, we always recommend reviewing and editing the content to ensure it meets your specific requirements and brand guidelines.",
    },
    {
      question: "Can multiple team members collaborate?",
      answer:
        "Absolutely! Our Professional and Enterprise plans include team collaboration features, allowing multiple users to work together, share projects, and maintain consistent brand messaging across your organization.",
    },
  ],
}: Faq1Props) => {
  return (
    <section className="relative z-10 py-16 md:py-32 bg-background">
      <div className="container mx-auto max-w-3xl px-6">
        <h1 className="mb-8 text-3xl font-semibold text-foreground md:mb-11 md:text-4xl">
          {heading}
        </h1>
        <Accordion type="single" collapsible className="w-full">
          {items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border">
              <AccordionTrigger className="font-semibold text-foreground hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export { Faq1 };
