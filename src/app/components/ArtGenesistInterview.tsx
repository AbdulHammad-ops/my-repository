import Image from 'next/image';
import Link from 'next/link';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../../components/ui/accordion';

const ArtGenesistInterview = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-r from-gray-50 to-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-center">Art Genesist Interview Q&amp;A with Alexa</h1>
      <div className="flex items-center mb-6 justify-center">
        <Image
          src="https://drive.google.com/uc?id=1ATZ7mWs3fA8sTKhK8UbINOYjGUj7vKc0" // Profile picture
          alt="Alexa"
          width={100}
          height={100}
          className="rounded-full mr-4 shadow"
        />
        <div>
          <h2 className="text-xl font-semibold">Alexa</h2>
          <p className="text-gray-600">Stay-at-home mom exploring AI-generated art.</p>
        </div>
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>1. Can you briefly introduce yourself and describe your focus on AI-generated art?</AccordionTrigger>
          <AccordionContent>
            <p>Hello, I am Alexa, a stay-at-home mom and I like to escape in the world of cuteness and sparkles.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>2. What inspired you to explore AI in your artistic work?</AccordionTrigger>
          <AccordionContent>
            <p>Actually, AI is my first experience in the artistic world, I just love all the possibilities that AI gives me and what helps me create with a minimum effort.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>3. Your artwork is focused on Cute AI Art. Can you tell us what led you down that path?</AccordionTrigger>
          <AccordionContent>
            <p>I just love anything cute and sparkly, I wanted to see the world in an adorable way.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>4.1 Can you share a specific piece of your artwork you’re particularly proud of?</AccordionTrigger>
          <AccordionContent>
            <div className="flex gap-4">
              <Link href="https://drive.google.com/file/d/1O_J7atJXCu3tuC7YjOaUiKgFacOjPchK/view?usp=sharing" className="text-blue-500">
                <Image src="https://drive.google.com/uc?id=1O_J7atJXCu3tuC7YjOaUiKgFacOjPchK" alt="Artwork 1" width={200} height={200} className="rounded shadow hover:scale-105 transition-transform duration-300" />
              </Link>
              <Link href="https://drive.google.com/file/d/1p906-hbR5myjq7P_FYNgOBp7xqCoce61/view?usp=sharing" className="text-blue-500">
                <Image src="https://drive.google.com/uc?id=1p906-hbR5myjq7P_FYNgOBp7xqCoce61" alt="Artwork 2" width={200} height={200} className="rounded shadow hover:scale-105 transition-transform duration-300" />
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>4.2 Can you tell us why above artwork is your favourite?</AccordionTrigger>
          <AccordionContent>
            <p>Well, it’s hard to pick a favorite, but I choose these images because they are the first that got viral.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>5. What challenges have you encountered while working with AI in your art, and how have you overcome them?</AccordionTrigger>
          <AccordionContent>
            <p>That it’s not always easy to create what you have in your mind, but because I create cuteness I can’t be mad at the outcome.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>6. Where do you get your design ideas and inspirations from?</AccordionTrigger>
          <AccordionContent>
            <p>I create prompts that best fit my ideas, and I get most of my inspiration from daily challenges hosted by fellow AI creators.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger>7. What part of the design process do you enjoy the most?</AccordionTrigger>
          <AccordionContent>
            <p>Seeing the outcome, I could click on ‘generate’ infinitely. And now, since I create a lot of reels, I really enjoy watching my images come to life.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9">
          <AccordionTrigger>8. You have over 100K followers on Instagram. What advice would you give to other artists who want to achieve that?</AccordionTrigger>
          <AccordionContent>
            <p>Just be consistent and enjoy the process.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-10">
          <AccordionTrigger>9. What was your dream when you were a child?</AccordionTrigger>
          <AccordionContent>
            <p>Just to have a loving family, which I do.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-11">
          <AccordionTrigger>10. What experiences do you hope to have in the future, and what dreams do you wish to fulfil?</AccordionTrigger>
          <AccordionContent>
            <p>In the future, I hope to keep exploring new creative opportunities with AI. I want to continue making engaging reels and images and connect with more people through my art. My dream is to inspire others and be part of a supportive creative community.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ArtGenesistInterview;
