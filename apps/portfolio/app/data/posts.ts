export interface Post {
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
  featured: boolean;
}

export const posts: Post[] = [
  {
    title: "Building a Modern Portfolio with Next.js & Framer Motion",
    excerpt:
      "A deep dive into creating smooth, animated portfolio experiences using the latest web technologies.",
    image: "/fullstack.webp",
    content: `
      <p>Creating a portfolio that stands out in 2026 requires more than just a list of projects. It requires an <strong>experience</strong>. In this article, we'll explore how to combine the power of Next.js with the fluid animations of Framer Motion to create something truly special.</p>
      
      <h3>Why Next.js?</h3>
      <p>Next.js remains the gold standard for React applications due to its excellent performance, SEO capabilities, and the flexibility of the App Router. For a portfolio, speed is everything. We want our visitors to feel the snapiness of the UI immediately.</p>
      
      <h3>Enter Framer Motion</h3>
      <p>Animations shouldn't be an afterthought. With Framer Motion, we can create gesture-based interactions and scroll-triggered animations that feel natural. The <code>layoutId</code> prop alone is a game-changer for shared element transitions.</p>
      
      <blockquote>"Animation is not just about making things move; it's about making things feel alive."</blockquote>
      
      <h3>Combining the Two</h3>
      <p>By wrapping our components in <code>motion</code> elements, we can easily add entrance animations. Using a shared <code>AnimatedSection</code> component ensures consistency across all pages of our portfolio.</p>
    `,
    date: "Feb 10, 2026",
    readTime: "5 min read",
    tags: ["Next.js", "Framer Motion", "React"],
    slug: "building-modern-portfolio-nextjs-framer-motion",
    featured: true,
  },
  {
    title: "Why TypeScript Is a Game-Changer for Web Development",
    excerpt:
      "How static typing transforms your developer experience and catches bugs before they reach production.",
    image: "/coding.jpg",
    content: `
      <p>If you're still writing vanilla JavaScript in 2026, you're missing out on the single most significant productivity boost in modern web development: <strong>TypeScript</strong>.</p>
      
      <h3>Safety First</h3>
      <p>The primary benefit of TypeScript is catching errors early. Instead of finding out a variable is <code>undefined</code> at runtime, your editor tells you immediately. This "shift left" on error detection saves countless hours of debugging.</p>
      
      <h3>Better Tooling</h3>
      <p>TypeScript isn't just about types; it's about the developer experience. Autocomplete, jump-to-definition, and refactoring tools become significantly more powerful when the editor understands the shape of your data.</p>
      
      <h3>Documentation as Code</h3>
      <p>In a team environment, types act as living documentation. You don't need to ask your teammate what an object contains; you just look at the interface definition.</p>
    `,
    date: "Jan 28, 2026",
    readTime: "4 min read",
    tags: ["TypeScript", "JavaScript", "DX"],
    slug: "why-typescript-game-changer",
    featured: false,
  },
  {
    title: "Mastering CSS Grid & Flexbox in 2026",
    excerpt:
      "Practical layout patterns every frontend developer should know for building responsive interfaces.",
    image: "/functionality.jpg",
    content: `
      <p>Layouts haven't been this exciting since the early days of the web. With the combination of CSS Grid and Flexbox, there's virtually no design that we can't implement with clean, performant CSS.</p>
      
      <h3>Grid for Macro, Flexbox for Micro</h3>
      <p>A good rule of thumb is to use CSS Grid for the overall page structure (macro layout) and Flexbox for the alignment of items within components (micro layout). This gives you the best of both worlds: two-dimensional control for the page and one-dimensional control for the details.</p>
      
      <h3>The Power of <code>subgrid</code></h3>
      <p>CSS Grid's <code>subgrid</code> feature has finally achieved broad browser support. It allows nested grids to inherit the tracks of their parents, making complex alignments across card components a breeze.</p>
      
      <h3>Responsive Without Media Queries?</h3>
      <p>With <code>minmax()</code>, <code>auto-fit</code>, and <code>auto-fill</code>, we can often create layouts that respond beautifully to screen size changes without writing a single media query. This simplifies our CSS and makes it more robust.</p>
    `,
    date: "Jan 15, 2026",
    readTime: "6 min read",
    tags: ["CSS", "Layout", "Responsive"],
    slug: "mastering-css-grid-flexbox-2026",
    featured: false,
  },
];
