export interface IJwtPayload {
  user: {
    user_id: string;
    name: string;
    email: string;
    image_url?: string;
  };
}
