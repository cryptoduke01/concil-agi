export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">About</h1>
      <div className="prose prose-invert max-w-none">
        <p>
          My name is <strong>Anita Gitta</strong>, I am a coder and AI developer with a
          background in neuroscience and multi-agent systems. Over the past decade,
          my work has focused on building artificial intelligences that do more than
          provide answers: I design systems that debate, deliberate, and challenge
          one another, because I believe intelligence thrives in plurality, not in
          isolation.
        </p>
        <p>
          Read more: <a className="underline" target="_blank" rel="noreferrer" href="https://medium.com/@orvomani1984/anita-gitta-architect-of-the-council-of-agi-7788b174d1e9">Medium article</a>
        </p>
      </div>
    </div>
  );
}


