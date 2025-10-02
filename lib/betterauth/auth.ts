import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { connectToDatabase } from "@/database/mongoose";
import { nextCookies } from "better-auth/next-js"

let authInstance: ReturnType<typeof betterAuth> | null = null;

export const getAuth = async() => {
    // If we've already initialized, reuse the instance
    if (authInstance) return authInstance;

    const mongoose = await connectToDatabase();
    const db = mongoose.connection.db;

    if (!db) throw new Error("Database connection not found");

    authInstance = betterAuth({
        /* eslint-disable @typescript-eslint/no-explicit-any */
        database: mongodbAdapter(db as any),
        /* eslint-enable @typescript-eslint/no-explicit-any */
        secret: process.env.BETTER_AUTH_SECRET,
        baseURL: process.env.BETTER_AUTH_BASE_URL || process.env.BETTER_AUTH_URL,
        emailAndPassword: {
            enabled: true,
            disableSignUp: false,
            requireEmailVerification: false,
            minPasswordLength: 8,
            maxPasswordLength: 128,
            autoSignIn: true,
        },
        plugins: [
            nextCookies()
        ]
    })

    return authInstance;
}

export const auth = await getAuth();