import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    rating: 5,
    quote:
      "The ANC headphones exceeded my expectations. The sound isolation on flights is flawless, and express shipping arrived in under 48 hours!",
    name: "Marcus R.",
    location: "Austin, TX",
  },
  {
    id: 2,
    rating: 5,
    quote:
      "Seamless shopping experience from desktop to mobile. My ceramic pour-over set arrived impeccably packaged and brews delicious morning cups.",
    name: "Sarah L.",
    location: "Seattle, WA",
  },
  {
    id: 3,
    rating: 5,
    quote:
      "Customer support responded within 5 minutes when I wanted to change the shipping address. That level of service is exceedingly rare these days.",
    name: "David K.",
    location: "Chicago, IL",
  },
];

const getInitials = (name) =>
  name
    .replace(".", "")
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();

function RatingCard({ review }) {
  const { rating, quote, name, location } = review;

  return (
    <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={18}
            className={
              i < rating
                ? "fill-amber-800 text-amber-800"
                : "fill-gray-200 text-gray-200"
            }
          />
        ))}
      </div>

      <p className="mt-4 flex-1 text-gray-700">“{quote}”</p>

      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-sm font-semibold text-amber-800">
          {getInitials(name)}
        </div>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-">
      <h2 className="mb-8 text-center text-3xl font-bold">
        What Our Customers Say
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <RatingCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
}