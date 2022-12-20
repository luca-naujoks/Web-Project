import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import DiscordProvider from "next-auth/providers/discord";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
     authorization: {params: {scope: "identify"}}
    })
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)