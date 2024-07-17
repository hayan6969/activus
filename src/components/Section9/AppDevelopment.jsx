import { cn } from "@/lib/utils";
import Marquee from "../magicui/marquee";


const reviews = [
    {
      name: "React Native",
      username: "@react_native",
      body: "React Native allows developers to build native apps using JavaScript and React.",
      img: "https://reactnative.dev/img/header_logo.svg",
    },
    {
      name: "Flutter",
      username: "@flutter",
      body: "Flutter enables building beautiful, natively compiled apps for mobile, web, and desktop from a single codebase.",
      img: "/assets/flutter.png",
    },
    {
      name: "Swift",
      username: "@swift",
      body: "Swift is a powerful programming language for macOS, iOS, watchOS, and tvOS with modern features.",
      img: "https://www.swift.com/themes/custom/swift_theme/images/swift-logo-new.svg",
    },
    {
      name: "Kotlin",
      username: "@kotlin",
      body: "Kotlin is a modern language for Android development, known for its productivity and safety features.",
      img: "/assets/kotlin.png",
    },
    {
      name: "Ionic",
      username: "@ionic",
      body: "Ionic is a mobile UI toolkit for building high-quality cross-platform native and web app experiences using web technologies.",
      img: "https://ionicframework.com/docs/logos/ionic-text-docs-dark.svg",
    },
  ];
  
  

const firstRow = reviews.slice(0, reviews.length - 1);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}) => {
  return (
    <figure
      className={cn(
        "relative w-[400px] cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className=" font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function AppDevelopment() {
  return (
    <div className="relative flex h-fit w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[80px] bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[80px] bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
