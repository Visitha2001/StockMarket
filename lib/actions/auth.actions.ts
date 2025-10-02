'use server'
import { auth } from "@/lib/betterauth/auth"
import { inngest } from "@/lib/inngest/client"
import { headers } from "next/headers"

export const singUpWithEmail = async ({
    email, fullName, riskTolerance, password, country, investmentGoals, preferredIndustry
}: SignUpFormData) => {
    try {
        const response = await auth?.api.signUpEmail({
            body: {
             email,
             password,
             name: fullName,   
            }
        })
        if (response) {
            await inngest.send({
                name: 'app/user.created',
                data: {
                    email,
                    name: fullName,
                    country,
                    investmentGoals,
                    preferredIndustry,
                    riskTolerance
                }
            })
        }
        return {
            success: true,
            data: response
        }
    } catch (error) {
        console.error('Error signing up with email:', error)
        return {
            success: false,
            error: 'Failed to sign up'
        }   
    }
}

export const signOut = async () => {
    try {
        await auth?.api.signOut({
            headers: await headers()
        })
        return {
            success: true
        }
    } catch (error) {
        console.error('Error signing out:', error)
        return {
            success: false,
            error: 'Failed to sign out'
        }
    }
}

export const signInWithEmail = async ({email, password}: SignInFormData) => {
    try {
        await auth?.api.signInEmail({
            body: {
                email,
                password,
            }
        })
        return {
            success: true
        }
    } catch (error) {
        console.error('Error signing in:', error)
        return {
            success: false,
            error: 'Failed to sign in'
        }
    }
}