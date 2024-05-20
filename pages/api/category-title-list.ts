import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  id: number;
  name: string;
  description: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData[]>
) {
  res.status(200).json([
    {
      id: 1,
      name: "helpers",
      description: "",
    },
    {
      id: 2,
      name: "anime game characters",
      description: "",
    },
    {
      id: 3,
      name: "anime game characters",
      description: "",
    },
    {
      id: 4,
      name: "helpers",
      description: "",
    },
    {
      id: 5,
      name: "anime game characters",
      description: "",
    },
    {
      id: 6,
      name: "helpers",
      description: "",
    },
    {
      id: 7,
      name: "anime game characters",
      description: "",
    },
    {
      id: 8,
      name: "helpers",
      description: "",
    },
    {
      id: 9,
      name: "anime game characters",
      description: "",
    },
    {
      id: 10,
      name: "helpers",
      description: "",
    },
    {
      id: 11,
      name: "anime game characters",
      description: "",
    },
  ]);
}
