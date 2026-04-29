"use client";

type Props = {
  baseDate: string;
};

export default function RollingDate({ baseDate }: Props) {
  const today = new Date();
  let date = new Date(baseDate);

  while (date < today) {
    date.setMonth(date.getMonth() + 3);
  }

  const formattedDate = date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return <span>{formattedDate}</span>;
}
