import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  id: number;
  url: string;
  title: string;
  content: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData[]>
) {
  res.status(200).json([
    {
      id: 1,
      url: "https://characterai.io/static/editorial/scenarios/library.mp4",
      title: "What do you want to do?",
      content: "Learn somthing new today",
    },
    {
      id: 2,
      url: "https://characterai.io/static/editorial/scenarios/creativity_s.mp4",
      title: "What do you want to do?",
      content: "Nurture your creativity",
    },
    {
      id: 3,
      url: "https://characterai.io/static/editorial/scenarios/travel_s.mp4",
      title: "What do you want to do?",
      content: "Go on an adventure!",
    },
    {
      id: 4,
      url: "https://characterai.io/static/editorial/scenarios/lighthouse.mp4",
      title: "What do you want to do?",
      content: "A trusted circle of support",
    },
    {
      id: 5,
      url: "https://characterai.io/static/editorial/scenarios/waterfall.mp4",
      title: "What do you want to do?",
      content: "Get fit and healthy",
    },
    {
      id: 6,
      url: "https://characterai.io/static/editorial/scenarios/dice.mp4",
      title: "What do you want to do?",
      content: "Epic challenges await",
    },
  ]);
}
