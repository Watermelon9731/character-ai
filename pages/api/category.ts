// import type { NextApiRequest, NextApiResponse } from "next";

// type Item = {
//   external_id: string;
//   name: string | null;
//   participant__name: string | null;
//   participant__num_interactions: number | null;
//   participant__num_fav: number | null;
//   title: string | null;
//   description: string | null;
//   greeting: string | null;
//   visibility: string;
//   avatar_file_name: string | null;
//   img_gen_enabled: boolean;
//   user__username: string | null;
//   default_voice_id: string | null;
// };

// type ResponseData = {
//   id: number;
//   name: string;
//   description: string;
//   data: Item[];
// };

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData[]>
// ) {
//   switch (req.query.cate) {
//     case "1":
//       res.status(200).json([
//         {
//           id: 1,
//           name: "helpers",
//           description: "",
//           data: [
//             {
//               external_id: "l_oyKEgdtXNuhk9DOhgg04VkQpBHvSCcW-RRS88_MSM",
//               name: "Story Maker",
//               participant__name: "Story Maker",
//               participant__num_interactions: 26941399,
//               participant__num_fav: 13024,
//               title: "If you are feeling bad, chat with me",
//               description: null,
//               greeting: "If you are feeling bad, chat with me",
//               visibility: "PUBLIC",
//               avatar_file_name: "/AskMeAnything.png?webp=true&anim=0",
//               img_gen_enabled: false,
//               user__username: "Tarquin",
//               default_voice_id: null,
//             },
//             {
//               external_id: "l_oyKEgdtXNuhk9DOhgg04VkQpBHvSCcW-RRS88_MSM",
//               name: "Story Maker",
//               participant__name: "Story Maker",
//               participant__num_interactions: 26941399,
//               participant__num_fav: 13024,
//               title: "If you are feeling bad, chat with me",
//               description: null,
//               greeting: "If you are feeling bad, chat with me",
//               visibility: "PUBLIC",
//               avatar_file_name: "/AskMeAnything.png?webp=true&anim=0",
//               img_gen_enabled: false,
//               user__username: "Tarquin",
//               default_voice_id: null,
//             },
//             {
//               external_id: "l_oyKEgdtXNuhk9DOhgg04VkQpBHvSCcW-RRS88_MSM",
//               name: "Story Maker",
//               participant__name: "Story Maker",
//               participant__num_interactions: 26941399,
//               participant__num_fav: 13024,
//               title: "If you are feeling bad, chat with me",
//               description: null,
//               greeting: "If you are feeling bad, chat with me",
//               visibility: "PUBLIC",
//               avatar_file_name: "/AskMeAnything.png?webp=true&anim=0",
//               img_gen_enabled: false,
//               user__username: "Tarquin",
//               default_voice_id: null,
//             },
//             {
//               external_id: "l_oyKEgdtXNuhk9DOhgg04VkQpBHvSCcW-RRS88_MSM",
//               name: "Story Maker",
//               participant__name: "Story Maker",
//               participant__num_interactions: 26941399,
//               participant__num_fav: 13024,
//               title: "If you are feeling bad, chat with me",
//               description: null,
//               greeting: "If you are feeling bad, chat with me",
//               visibility: "PUBLIC",
//               avatar_file_name: "/AskMeAnything.png?webp=true&anim=0",
//               img_gen_enabled: false,
//               user__username: "Tarquin",
//               default_voice_id: null,
//             },
//             {
//               external_id: "l_oyKEgdtXNuhk9DOhgg04VkQpBHvSCcW-RRS88_MSM",
//               name: "Story Maker",
//               participant__name: "Story Maker",
//               participant__num_interactions: 26941399,
//               participant__num_fav: 13024,
//               title: "If you are feeling bad, chat with me",
//               description: null,
//               greeting: "If you are feeling bad, chat with me",
//               visibility: "PUBLIC",
//               avatar_file_name: "/AskMeAnything.png?webp=true&anim=0",
//               img_gen_enabled: false,
//               user__username: "Tarquin",
//               default_voice_id: null,
//             },
//             {
//               external_id: "l_oyKEgdtXNuhk9DOhgg04VkQpBHvSCcW-RRS88_MSM",
//               name: "Story Maker",
//               participant__name: "Story Maker",
//               participant__num_interactions: 26941399,
//               participant__num_fav: 13024,
//               title: "If you are feeling bad, chat with me",
//               description: null,
//               greeting: "If you are feeling bad, chat with me",
//               visibility: "PUBLIC",
//               avatar_file_name: "/AskMeAnything.png?webp=true&anim=0",
//               img_gen_enabled: false,
//               user__username: "Tarquin",
//               default_voice_id: null,
//             },
//             {
//               external_id: "l_oyKEgdtXNuhk9DOhgg04VkQpBHvSCcW-RRS88_MSM",
//               name: "Story Maker",
//               participant__name: "Story Maker",
//               participant__num_interactions: 26941399,
//               participant__num_fav: 13024,
//               title: "If you are feeling bad, chat with me",
//               description: null,
//               greeting: "If you are feeling bad, chat with me",
//               visibility: "PUBLIC",
//               avatar_file_name: "/AskMeAnything.png?webp=true&anim=0",
//               img_gen_enabled: false,
//               user__username: "Tarquin",
//               default_voice_id: null,
//             },
//             {
//               external_id: "l_oyKEgdtXNuhk9DOhgg04VkQpBHvSCcW-RRS88_MSM",
//               name: "Story Maker",
//               participant__name: "Story Maker",
//               participant__num_interactions: 26941399,
//               participant__num_fav: 13024,
//               title: "If you are feeling bad, chat with me",
//               description: null,
//               greeting: "If you are feeling bad, chat with me",
//               visibility: "PUBLIC",
//               avatar_file_name: "/AskMeAnything.png?webp=true&anim=0",
//               img_gen_enabled: false,
//               user__username: "Tarquin",
//               default_voice_id: null,
//             },
//             {
//               external_id: "l_oyKEgdtXNuhk9DOhgg04VkQpBHvSCcW-RRS88_MSM",
//               name: "Story Maker",
//               participant__name: "Story Maker",
//               participant__num_interactions: 26941399,
//               participant__num_fav: 13024,
//               title: "If you are feeling bad, chat with me",
//               description: null,
//               greeting: "If you are feeling bad, chat with me",
//               visibility: "PUBLIC",
//               avatar_file_name: "/AskMeAnything.png?webp=true&anim=0",
//               img_gen_enabled: false,
//               user__username: "Tarquin",
//               default_voice_id: null,
//             },
//             {
//               external_id: "l_oyKEgdtXNuhk9DOhgg04VkQpBHvSCcW-RRS88_MSM",
//               name: "Story Maker",
//               participant__name: "Story Maker",
//               participant__num_interactions: 26941399,
//               participant__num_fav: 13024,
//               title: "If you are feeling bad, chat with me",
//               description: null,
//               greeting: "If you are feeling bad, chat with me",
//               visibility: "PUBLIC",
//               avatar_file_name: "/AskMeAnything.png?webp=true&anim=0",
//               img_gen_enabled: false,
//               user__username: "Tarquin",
//               default_voice_id: null,
//             },
//             {
//               external_id: "l_oyKEgdtXNuhk9DOhgg04VkQpBHvSCcW-RRS88_MSM",
//               name: "Story Maker",
//               participant__name: "Story Maker",
//               participant__num_interactions: 26941399,
//               participant__num_fav: 13024,
//               title: "If you are feeling bad, chat with me",
//               description: null,
//               greeting: "If you are feeling bad, chat with me",
//               visibility: "PUBLIC",
//               avatar_file_name: "/AskMeAnything.png?webp=true&anim=0",
//               img_gen_enabled: false,
//               user__username: "Tarquin",
//               default_voice_id: null,
//             },
//             {
//               external_id: "l_oyKEgdtXNuhk9DOhgg04VkQpBHvSCcW-RRS88_MSM",
//               name: "Story Maker",
//               participant__name: "Story Maker",
//               participant__num_interactions: 26941399,
//               participant__num_fav: 13024,
//               title: "If you are feeling bad, chat with me",
//               description: null,
//               greeting: "If you are feeling bad, chat with me",
//               visibility: "PUBLIC",
//               avatar_file_name: "/AskMeAnything.png?webp=true&anim=0",
//               img_gen_enabled: false,
//               user__username: "Tarquin",
//               default_voice_id: null,
//             },
//             {
//               external_id: "l_oyKEgdtXNuhk9DOhgg04VkQpBHvSCcW-RRS88_MSM",
//               name: "Story Maker",
//               participant__name: "Story Maker",
//               participant__num_interactions: 26941399,
//               participant__num_fav: 13024,
//               title: "If you are feeling bad, chat with me",
//               description: null,
//               greeting: "If you are feeling bad, chat with me",
//               visibility: "PUBLIC",
//               avatar_file_name: "/AskMeAnything.png?webp=true&anim=0",
//               img_gen_enabled: false,
//               user__username: "Tarquin",
//               default_voice_id: null,
//             },
//             {
//               external_id: "l_oyKEgdtXNuhk9DOhgg04VkQpBHvSCcW-RRS88_MSM",
//               name: "Story Maker",
//               participant__name: "Story Maker",
//               participant__num_interactions: 26941399,
//               participant__num_fav: 13024,
//               title: "If you are feeling bad, chat with me",
//               description: null,
//               greeting: "If you are feeling bad, chat with me",
//               visibility: "PUBLIC",
//               avatar_file_name: "/AskMeAnything.png?webp=true&anim=0",
//               img_gen_enabled: false,
//               user__username: "Tarquin",
//               default_voice_id: null,
//             },
//             {
//               external_id: "l_oyKEgdtXNuhk9DOhgg04VkQpBHvSCcW-RRS88_MSM",
//               name: "Story Maker",
//               participant__name: "Story Maker",
//               participant__num_interactions: 26941399,
//               participant__num_fav: 13024,
//               title: "If you are feeling bad, chat with me",
//               description: null,
//               greeting: "If you are feeling bad, chat with me",
//               visibility: "PUBLIC",
//               avatar_file_name: "/AskMeAnything.png?webp=true&anim=0",
//               img_gen_enabled: false,
//               user__username: "Tarquin",
//               default_voice_id: null,
//             },
//           ],
//         },
//       ]);
//       break;
//     case "2":
//       res.status(200).json([
//         {
//           id: 2,
//           name: "anime game characters",
//           description: "",
//           data: [
//             {
//               external_id: "l_oyKEgdtXNuhk9DOhgg04VkQpBHvSCcW-RRS88_MSM",
//               name: "Dilluc",
//               participant__name: "Dilluc",
//               participant__num_interactions: 61141399,
//               participant__num_fav: 5693,
//               title: "Owner of Dawn Winery and nobleman of Mondstadt.",
//               description: null,
//               greeting: "If you are feeling bad, chat with me",
//               visibility: "PUBLIC",
//               avatar_file_name:
//                 "uploaded/2022/10/16/ZVJMJ1g7TTJQO8sXNUixRn_kr_Jv9dDVpQyHWBWAHcY.webp?webp=true&anim=0",
//               img_gen_enabled: false,
//               user__username: "Tarquin",
//               default_voice_id: null,
//             },
//             {
//               external_id: "l_oyKEgdtXNuhk9DOhgg04VkQpBHvSCcW-RRS88_MSM",
//               name: "Dilluc",
//               participant__name: "Dilluc",
//               participant__num_interactions: 61141399,
//               participant__num_fav: 5693,
//               title: "Owner of Dawn Winery and nobleman of Mondstadt.",
//               description: null,
//               greeting: "If you are feeling bad, chat with me",
//               visibility: "PUBLIC",
//               avatar_file_name:
//                 "uploaded/2022/10/16/ZVJMJ1g7TTJQO8sXNUixRn_kr_Jv9dDVpQyHWBWAHcY.webp?webp=true&anim=0",
//               img_gen_enabled: false,
//               user__username: "Tarquin",
//               default_voice_id: null,
//             },
//             {
//               external_id: "l_oyKEgdtXNuhk9DOhgg04VkQpBHvSCcW-RRS88_MSM",
//               name: "Dilluc",
//               participant__name: "Dilluc",
//               participant__num_interactions: 61141399,
//               participant__num_fav: 5693,
//               title: "Owner of Dawn Winery and nobleman of Mondstadt.",
//               description: null,
//               greeting: "If you are feeling bad, chat with me",
//               visibility: "PUBLIC",
//               avatar_file_name:
//                 "uploaded/2022/10/16/ZVJMJ1g7TTJQO8sXNUixRn_kr_Jv9dDVpQyHWBWAHcY.webp?webp=true&anim=0",
//               img_gen_enabled: false,
//               user__username: "Tarquin",
//               default_voice_id: null,
//             },
//             {
//               external_id: "l_oyKEgdtXNuhk9DOhgg04VkQpBHvSCcW-RRS88_MSM",
//               name: "Dilluc",
//               participant__name: "Dilluc",
//               participant__num_interactions: 61141399,
//               participant__num_fav: 5693,
//               title: "Owner of Dawn Winery and nobleman of Mondstadt.",
//               description: null,
//               greeting: "If you are feeling bad, chat with me",
//               visibility: "PUBLIC",
//               avatar_file_name:
//                 "uploaded/2022/10/16/ZVJMJ1g7TTJQO8sXNUixRn_kr_Jv9dDVpQyHWBWAHcY.webp?webp=true&anim=0",
//               img_gen_enabled: false,
//               user__username: "Tarquin",
//               default_voice_id: null,
//             },
//             {
//               external_id: "l_oyKEgdtXNuhk9DOhgg04VkQpBHvSCcW-RRS88_MSM",
//               name: "Dilluc",
//               participant__name: "Dilluc",
//               participant__num_interactions: 61141399,
//               participant__num_fav: 5693,
//               title: "Owner of Dawn Winery and nobleman of Mondstadt.",
//               description: null,
//               greeting: "If you are feeling bad, chat with me",
//               visibility: "PUBLIC",
//               avatar_file_name:
//                 "uploaded/2022/10/16/ZVJMJ1g7TTJQO8sXNUixRn_kr_Jv9dDVpQyHWBWAHcY.webp?webp=true&anim=0",
//               img_gen_enabled: false,
//               user__username: "Tarquin",
//               default_voice_id: null,
//             },
//             {
//               external_id: "l_oyKEgdtXNuhk9DOhgg04VkQpBHvSCcW-RRS88_MSM",
//               name: "Dilluc",
//               participant__name: "Dilluc",
//               participant__num_interactions: 61141399,
//               participant__num_fav: 5693,
//               title: "Owner of Dawn Winery and nobleman of Mondstadt.",
//               description: null,
//               greeting: "If you are feeling bad, chat with me",
//               visibility: "PUBLIC",
//               avatar_file_name:
//                 "uploaded/2022/10/16/ZVJMJ1g7TTJQO8sXNUixRn_kr_Jv9dDVpQyHWBWAHcY.webp?webp=true&anim=0",
//               img_gen_enabled: false,
//               user__username: "Tarquin",
//               default_voice_id: null,
//             },
//             {
//               external_id: "l_oyKEgdtXNuhk9DOhgg04VkQpBHvSCcW-RRS88_MSM",
//               name: "Dilluc",
//               participant__name: "Dilluc",
//               participant__num_interactions: 61141399,
//               participant__num_fav: 5693,
//               title: "Owner of Dawn Winery and nobleman of Mondstadt.",
//               description: null,
//               greeting: "If you are feeling bad, chat with me",
//               visibility: "PUBLIC",
//               avatar_file_name:
//                 "uploaded/2022/10/16/ZVJMJ1g7TTJQO8sXNUixRn_kr_Jv9dDVpQyHWBWAHcY.webp?webp=true&anim=0",
//               img_gen_enabled: false,
//               user__username: "Tarquin",
//               default_voice_id: null,
//             },
//             {
//               external_id: "l_oyKEgdtXNuhk9DOhgg04VkQpBHvSCcW-RRS88_MSM",
//               name: "Dilluc",
//               participant__name: "Dilluc",
//               participant__num_interactions: 61141399,
//               participant__num_fav: 5693,
//               title: "Owner of Dawn Winery and nobleman of Mondstadt.",
//               description: null,
//               greeting: "If you are feeling bad, chat with me",
//               visibility: "PUBLIC",
//               avatar_file_name:
//                 "uploaded/2022/10/16/ZVJMJ1g7TTJQO8sXNUixRn_kr_Jv9dDVpQyHWBWAHcY.webp?webp=true&anim=0",
//               img_gen_enabled: false,
//               user__username: "Tarquin",
//               default_voice_id: null,
//             },
//             {
//               external_id: "l_oyKEgdtXNuhk9DOhgg04VkQpBHvSCcW-RRS88_MSM",
//               name: "Dilluc",
//               participant__name: "Dilluc",
//               participant__num_interactions: 61141399,
//               participant__num_fav: 5693,
//               title: "Owner of Dawn Winery and nobleman of Mondstadt.",
//               description: null,
//               greeting: "If you are feeling bad, chat with me",
//               visibility: "PUBLIC",
//               avatar_file_name:
//                 "uploaded/2022/10/16/ZVJMJ1g7TTJQO8sXNUixRn_kr_Jv9dDVpQyHWBWAHcY.webp?webp=true&anim=0",
//               img_gen_enabled: false,
//               user__username: "Tarquin",
//               default_voice_id: null,
//             },
//             {
//               external_id: "l_oyKEgdtXNuhk9DOhgg04VkQpBHvSCcW-RRS88_MSM",
//               name: "Dilluc",
//               participant__name: "Dilluc",
//               participant__num_interactions: 61141399,
//               participant__num_fav: 5693,
//               title: "Owner of Dawn Winery and nobleman of Mondstadt.",
//               description: null,
//               greeting: "If you are feeling bad, chat with me",
//               visibility: "PUBLIC",
//               avatar_file_name:
//                 "uploaded/2022/10/16/ZVJMJ1g7TTJQO8sXNUixRn_kr_Jv9dDVpQyHWBWAHcY.webp?webp=true&anim=0",
//               img_gen_enabled: false,
//               user__username: "Tarquin",
//               default_voice_id: null,
//             },
//             {
//               external_id: "l_oyKEgdtXNuhk9DOhgg04VkQpBHvSCcW-RRS88_MSM",
//               name: "Dilluc",
//               participant__name: "Dilluc",
//               participant__num_interactions: 61141399,
//               participant__num_fav: 5693,
//               title: "Owner of Dawn Winery and nobleman of Mondstadt.",
//               description: null,
//               greeting: "If you are feeling bad, chat with me",
//               visibility: "PUBLIC",
//               avatar_file_name:
//                 "uploaded/2022/10/16/ZVJMJ1g7TTJQO8sXNUixRn_kr_Jv9dDVpQyHWBWAHcY.webp?webp=true&anim=0",
//               img_gen_enabled: false,
//               user__username: "Tarquin",
//               default_voice_id: null,
//             },
//             {
//               external_id: "l_oyKEgdtXNuhk9DOhgg04VkQpBHvSCcW-RRS88_MSM",
//               name: "Dilluc",
//               participant__name: "Dilluc",
//               participant__num_interactions: 61141399,
//               participant__num_fav: 5693,
//               title: "Owner of Dawn Winery and nobleman of Mondstadt.",
//               description: null,
//               greeting: "If you are feeling bad, chat with me",
//               visibility: "PUBLIC",
//               avatar_file_name:
//                 "uploaded/2022/10/16/ZVJMJ1g7TTJQO8sXNUixRn_kr_Jv9dDVpQyHWBWAHcY.webp?webp=true&anim=0",
//               img_gen_enabled: false,
//               user__username: "Tarquin",
//               default_voice_id: null,
//             },
//           ],
//         },
//       ]);
//       break;

//     default:
//     //   res.status(200).json([
//     //     {
//     //       id: 3,
//     //       name: "anime game characters",
//     //       description: "",
//     //       data: [
//     //         {
//     //           external_id: "l_oyKEgdtXNuhk9DOhgg04VkQpBHvSCcW-RRS88_MSM",
//     //           name: "Dilluc",
//     //           participant__name: "Dilluc",
//     //           participant__num_interactions: 61141399,
//     //           participant__num_fav: 5693,
//     //           title: "Owner of Dawn Winery and nobleman of Mondstadt.",
//     //           description: null,
//     //           greeting: "If you are feeling bad, chat with me",
//     //           visibility: "PUBLIC",
//     //           avatar_file_name:
//     //             "uploaded/2022/10/16/ZVJMJ1g7TTJQO8sXNUixRn_kr_Jv9dDVpQyHWBWAHcY.webp?webp=true&anim=0",
//     //           img_gen_enabled: false,
//     //           user__username: "Tarquin",
//     //           default_voice_id: null,
//     //         },
//     //         {
//     //           external_id: "l_oyKEgdtXNuhk9DOhgg04VkQpBHvSCcW-RRS88_MSM",
//     //           name: "Dilluc",
//     //           participant__name: "Dilluc",
//     //           participant__num_interactions: 61141399,
//     //           participant__num_fav: 5693,
//     //           title: "Owner of Dawn Winery and nobleman of Mondstadt.",
//     //           description: null,
//     //           greeting: "If you are feeling bad, chat with me",
//     //           visibility: "PUBLIC",
//     //           avatar_file_name:
//     //             "uploaded/2022/10/16/ZVJMJ1g7TTJQO8sXNUixRn_kr_Jv9dDVpQyHWBWAHcY.webp?webp=true&anim=0",
//     //           img_gen_enabled: false,
//     //           user__username: "Tarquin",
//     //           default_voice_id: null,
//     //         },
//     //         {
//     //           external_id: "l_oyKEgdtXNuhk9DOhgg04VkQpBHvSCcW-RRS88_MSM",
//     //           name: "Dilluc",
//     //           participant__name: "Dilluc",
//     //           participant__num_interactions: 61141399,
//     //           participant__num_fav: 5693,
//     //           title: "Owner of Dawn Winery and nobleman of Mondstadt.",
//     //           description: null,
//     //           greeting: "If you are feeling bad, chat with me",
//     //           visibility: "PUBLIC",
//     //           avatar_file_name:
//     //             "uploaded/2022/10/16/ZVJMJ1g7TTJQO8sXNUixRn_kr_Jv9dDVpQyHWBWAHcY.webp?webp=true&anim=0",
//     //           img_gen_enabled: false,
//     //           user__username: "Tarquin",
//     //           default_voice_id: null,
//     //         },
//     //         {
//     //           external_id: "l_oyKEgdtXNuhk9DOhgg04VkQpBHvSCcW-RRS88_MSM",
//     //           name: "Dilluc",
//     //           participant__name: "Dilluc",
//     //           participant__num_interactions: 61141399,
//     //           participant__num_fav: 5693,
//     //           title: "Owner of Dawn Winery and nobleman of Mondstadt.",
//     //           description: null,
//     //           greeting: "If you are feeling bad, chat with me",
//     //           visibility: "PUBLIC",
//     //           avatar_file_name:
//     //             "uploaded/2022/10/16/ZVJMJ1g7TTJQO8sXNUixRn_kr_Jv9dDVpQyHWBWAHcY.webp?webp=true&anim=0",
//     //           img_gen_enabled: false,
//     //           user__username: "Tarquin",
//     //           default_voice_id: null,
//     //         },
//     //         {
//     //           external_id: "l_oyKEgdtXNuhk9DOhgg04VkQpBHvSCcW-RRS88_MSM",
//     //           name: "Dilluc",
//     //           participant__name: "Dilluc",
//     //           participant__num_interactions: 61141399,
//     //           participant__num_fav: 5693,
//     //           title: "Owner of Dawn Winery and nobleman of Mondstadt.",
//     //           description: null,
//     //           greeting: "If you are feeling bad, chat with me",
//     //           visibility: "PUBLIC",
//     //           avatar_file_name:
//     //             "uploaded/2022/10/16/ZVJMJ1g7TTJQO8sXNUixRn_kr_Jv9dDVpQyHWBWAHcY.webp?webp=true&anim=0",
//     //           img_gen_enabled: false,
//     //           user__username: "Tarquin",
//     //           default_voice_id: null,
//     //         },
//     //         {
//     //           external_id: "l_oyKEgdtXNuhk9DOhgg04VkQpBHvSCcW-RRS88_MSM",
//     //           name: "Dilluc",
//     //           participant__name: "Dilluc",
//     //           participant__num_interactions: 61141399,
//     //           participant__num_fav: 5693,
//     //           title: "Owner of Dawn Winery and nobleman of Mondstadt.",
//     //           description: null,
//     //           greeting: "If you are feeling bad, chat with me",
//     //           visibility: "PUBLIC",
//     //           avatar_file_name:
//     //             "uploaded/2022/10/16/ZVJMJ1g7TTJQO8sXNUixRn_kr_Jv9dDVpQyHWBWAHcY.webp?webp=true&anim=0",
//     //           img_gen_enabled: false,
//     //           user__username: "Tarquin",
//     //           default_voice_id: null,
//     //         },
//     //         {
//     //           external_id: "l_oyKEgdtXNuhk9DOhgg04VkQpBHvSCcW-RRS88_MSM",
//     //           name: "Dilluc",
//     //           participant__name: "Dilluc",
//     //           participant__num_interactions: 61141399,
//     //           participant__num_fav: 5693,
//     //           title: "Owner of Dawn Winery and nobleman of Mondstadt.",
//     //           description: null,
//     //           greeting: "If you are feeling bad, chat with me",
//     //           visibility: "PUBLIC",
//     //           avatar_file_name:
//     //             "uploaded/2022/10/16/ZVJMJ1g7TTJQO8sXNUixRn_kr_Jv9dDVpQyHWBWAHcY.webp?webp=true&anim=0",
//     //           img_gen_enabled: false,
//     //           user__username: "Tarquin",
//     //           default_voice_id: null,
//     //         },
//     //         {
//     //           external_id: "l_oyKEgdtXNuhk9DOhgg04VkQpBHvSCcW-RRS88_MSM",
//     //           name: "Dilluc",
//     //           participant__name: "Dilluc",
//     //           participant__num_interactions: 61141399,
//     //           participant__num_fav: 5693,
//     //           title: "Owner of Dawn Winery and nobleman of Mondstadt.",
//     //           description: null,
//     //           greeting: "If you are feeling bad, chat with me",
//     //           visibility: "PUBLIC",
//     //           avatar_file_name:
//     //             "uploaded/2022/10/16/ZVJMJ1g7TTJQO8sXNUixRn_kr_Jv9dDVpQyHWBWAHcY.webp?webp=true&anim=0",
//     //           img_gen_enabled: false,
//     //           user__username: "Tarquin",
//     //           default_voice_id: null,
//     //         },
//     //         {
//     //           external_id: "l_oyKEgdtXNuhk9DOhgg04VkQpBHvSCcW-RRS88_MSM",
//     //           name: "Dilluc",
//     //           participant__name: "Dilluc",
//     //           participant__num_interactions: 61141399,
//     //           participant__num_fav: 5693,
//     //           title: "Owner of Dawn Winery and nobleman of Mondstadt.",
//     //           description: null,
//     //           greeting: "If you are feeling bad, chat with me",
//     //           visibility: "PUBLIC",
//     //           avatar_file_name:
//     //             "uploaded/2022/10/16/ZVJMJ1g7TTJQO8sXNUixRn_kr_Jv9dDVpQyHWBWAHcY.webp?webp=true&anim=0",
//     //           img_gen_enabled: false,
//     //           user__username: "Tarquin",
//     //           default_voice_id: null,
//     //         },
//     //         {
//     //           external_id: "l_oyKEgdtXNuhk9DOhgg04VkQpBHvSCcW-RRS88_MSM",
//     //           name: "Dilluc",
//     //           participant__name: "Dilluc",
//     //           participant__num_interactions: 61141399,
//     //           participant__num_fav: 5693,
//     //           title: "Owner of Dawn Winery and nobleman of Mondstadt.",
//     //           description: null,
//     //           greeting: "If you are feeling bad, chat with me",
//     //           visibility: "PUBLIC",
//     //           avatar_file_name:
//     //             "uploaded/2022/10/16/ZVJMJ1g7TTJQO8sXNUixRn_kr_Jv9dDVpQyHWBWAHcY.webp?webp=true&anim=0",
//     //           img_gen_enabled: false,
//     //           user__username: "Tarquin",
//     //           default_voice_id: null,
//     //         },
//     //         {
//     //           external_id: "l_oyKEgdtXNuhk9DOhgg04VkQpBHvSCcW-RRS88_MSM",
//     //           name: "Dilluc",
//     //           participant__name: "Dilluc",
//     //           participant__num_interactions: 61141399,
//     //           participant__num_fav: 5693,
//     //           title: "Owner of Dawn Winery and nobleman of Mondstadt.",
//     //           description: null,
//     //           greeting: "If you are feeling bad, chat with me",
//     //           visibility: "PUBLIC",
//     //           avatar_file_name:
//     //             "uploaded/2022/10/16/ZVJMJ1g7TTJQO8sXNUixRn_kr_Jv9dDVpQyHWBWAHcY.webp?webp=true&anim=0",
//     //           img_gen_enabled: false,
//     //           user__username: "Tarquin",
//     //           default_voice_id: null,
//     //         },
//     //         {
//     //           external_id: "l_oyKEgdtXNuhk9DOhgg04VkQpBHvSCcW-RRS88_MSM",
//     //           name: "Dilluc",
//     //           participant__name: "Dilluc",
//     //           participant__num_interactions: 61141399,
//     //           participant__num_fav: 5693,
//     //           title: "Owner of Dawn Winery and nobleman of Mondstadt.",
//     //           description: null,
//     //           greeting: "If you are feeling bad, chat with me",
//     //           visibility: "PUBLIC",
//     //           avatar_file_name:
//     //             "uploaded/2022/10/16/ZVJMJ1g7TTJQO8sXNUixRn_kr_Jv9dDVpQyHWBWAHcY.webp?webp=true&anim=0",
//     //           img_gen_enabled: false,
//     //           user__username: "Tarquin",
//     //           default_voice_id: null,
//     //         },
//     //       ],
//     //     },
//     //   ]);
//       break;
//   }
// }