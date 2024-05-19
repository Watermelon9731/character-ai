interface Character {
  external_id: string;
  name: string | null;
  participant__name: string | null;
  participant__num_interactions: number | null;
  title: string | null;
  description: string | null;
  greeting: string | null;
  visibility: string;
  avatar_file_name: string | null;
  img_gen_enabled: boolean;
  user__username: string | null;
  default_voice_id: string | null;
}
