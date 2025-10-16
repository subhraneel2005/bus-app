import { createAuthClient } from "better-auth/client";
import { phoneNumberClient } from "better-auth/client/plugins";

const authClient = createAuthClient({
  plugins: [phoneNumberClient()],
});
