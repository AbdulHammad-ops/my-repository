import Image from 'next/image';
import Link from 'next/link';

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
      <div className="space-y-6">
        <div className="border rounded-lg p-4 bg-white shadow hover:shadow-lg transition-shadow duration-300">
          <h3 className="font-bold">1. Can you briefly introduce yourself and describe your focus on AI-generated art?</h3>
          <p>Hello, I am Alexa, a stay-at-home mom and I like to escape in the world of cuteness and sparkles.</p>
        </div>
        <div className="border rounded-lg p-4 bg-white shadow hover:shadow-lg transition-shadow duration-300">
          <h3 className="font-bold">2. What inspired you to explore AI in your artistic work?</h3>
          <p>Actually, AI is my first experience in the artistic world, I just love all the possibilities that AI gives me and what helps me create with a minimum effort.</p>
        </div>
        <div className="border rounded-lg p-4 bg-white shadow hover:shadow-lg transition-shadow duration-300">
          <h3 className="font-bold">3. Your artwork is focused on Cute AI Art. Can you tell us what led you down that path?</h3>
          <p>I just love anything cute and sparkly, I wanted to see the world in an adorable way.</p>
        </div>
        <div className="border rounded-lg p-4 bg-white shadow hover:shadow-lg transition-shadow duration-300">
          <h3 className="font-bold">4.1 Can you share a specific piece of your artwork you’re particularly proud of?</h3>
          <div className="flex gap-4">
            <Link href="https://drive.google.com/file/d/1O_J7atJXCu3tuC7YjOaUiKgFacOjPchK/view?usp=sharing" className="text-blue-500">
              <Image src="https://drive.google.com/uc?id=1O_J7atJXCu3tuC7YjOaUiKgFacOjPchK" alt="Artwork 1" width={200} height={200} className="rounded shadow hover:scale-105 transition-transform duration-300" />
            </Link>
            <Link href="https://drive.google.com/file/d/1p906-hbR5myjq7P_FYNgOBp7xqCoce61/view?usp=sharing" className="text-blue-500">
              <Image src="https://drive.google.com/uc?id=1p906-hbR5myjq7P_FYNgOBp7xqCoce61" alt="Artwork 2" width={200} height={200} className="rounded shadow hover:scale-105 transition-transform duration-300" />
            </Link>
          </div>
        </div>
        <div className="border rounded-lg p-4 bg-white shadow hover:shadow-lg transition-shadow duration-300">
          <h3 className="font-bold">4.2 Can you tell us why above artwork is your favourite?</h3>
          <p>Well, it’s hard to pick a favorite, but I choose these images because they are the first that got viral.</p>
        </div>
        <div className="border rounded-lg p-4 bg-white shadow hover:shadow-lg transition-shadow duration-300">
          <h3 className="font-bold">5. What challenges have you encountered while working with AI in your art, and how have you overcome them?</h3>
          <p>That it’s not always easy to create what you have in your mind, but because I create cuteness I can’t be mad at the outcome.</p>
        </div>
        <div className="border rounded-lg p-4 bg-white shadow hover:shadow-lg transition-shadow duration-300">
          <h3 className="font-bold">6. Where do you get your design ideas and inspirations from?</h3>
          <p>I create prompts that best fit my ideas, and I get most of my inspiration from daily challenges hosted by fellow AI creators.</p>
        </div>
        <div className="border rounded-lg p-4 bg-white shadow hover:shadow-lg transition-shadow duration-300">
          <h3 className="font-bold">7. What part of the design process do you enjoy the most?</h3>
          <p>Seeing the outcome, I could click on ‘generate’ infinitely. And now, since I create a lot of reels, I really enjoy watching my images come to life.</p>
        </div>
        <div className="border rounded-lg p-4 bg-white shadow hover:shadow-lg transition-shadow duration-300">
          <h3 className="font-bold">8. You have over 100K followers on Instagram. What advice would you give to other artists who want to achieve that?</h3>
          <p>Just be consistent and enjoy the process.</p>
        </div>
        <div className="border rounded-lg p-4 bg-white shadow hover:shadow-lg transition-shadow duration-300">
          <h3 className="font-bold">9. What was your dream when you were a child?</h3>
          <p>Just to have a loving family, which I do.</p>
        </div>
        <div className="border rounded-lg p-4 bg-white shadow hover:shadow-lg transition-shadow duration-300">
          <h3 className="font-bold">10. What experiences do you hope to have in the future, and what dreams do you wish to fulfil?</h3>
          <p>In the future, I hope to keep exploring new creative opportunities with AI. I want to continue making engaging reels and images and connect with more people through my art. My dream is to inspire others and be part of a supportive creative community.</p>
        </div>
      </div>
    </div>
  );
};

export default ArtGenesistInterview;
