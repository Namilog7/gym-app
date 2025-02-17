import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

// Configura tus opciones de autenticación
const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (profile.email === 'chazarretamaximiliano7@gmail.com' || profile.email === 'fedesalva78@gmail.com') {
                return true;
            }
            return false;
        },
        async redirect({ url, baseUrl }) {
            if (url === '/api/auth/signout') {
                return baseUrl;
            }
            return baseUrl + '/admin';
        },
    },
};

// Exporta funciones separadas para cada método HTTP
export async function GET(req, res) {
    return NextAuth(req, res, authOptions);
}

export async function POST(req, res) {
    return NextAuth(req, res, authOptions);
}
