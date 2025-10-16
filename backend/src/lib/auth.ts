import { betterAuth } from "better-auth";
import { phoneNumber } from "better-auth/plugins";

export const auth = betterAuth({
  plugins: [
    phoneNumber({
      sendOTP: ({ phoneNumber, code }, request) => {},
    }),
  ],
});
