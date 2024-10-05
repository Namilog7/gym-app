import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (profile.email === 'gonzalodavidbaeznoriega@gmail.com') {
                return '/admin';
            }
            return false;
        },
        async redirect({ url, baseUrl }) {
            // Verificar si la redirección es después de un signOut
            if (url === '/api/auth/signout') {
                return baseUrl; // Redirigir a la página principal
            }
            return url.startsWith(baseUrl) ? url : baseUrl;
        },
    }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };