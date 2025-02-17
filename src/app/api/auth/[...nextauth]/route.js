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
            if (profile.email === 'chazarretamaximiliano7@gmail.com' || profile.email === "fedesalva78@gmail.com") {
                return true; // Autenticación permitida
            }
            return false; // Rechazar autenticación
        },
        async redirect({ url, baseUrl }) {
            if (url === '/api/auth/signout') {
                return baseUrl; // Redirigir a la página principal después de signOut
            }
            // Redirige a '/admin' después de iniciar sesión, si lo necesitas
            return baseUrl + '/admin';
        },
    }

};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };