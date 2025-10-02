import { sendWelcomeEmail } from "@/lib/nodemailer/index";
import { PERSONALIZED_WELCOME_EMAIL_PROMPT } from "./promts";
import { inngest } from "@/lib/inngest/client";

export const sendSingUpEmail = inngest.createFunction(
    {id: 'sign-up-email'},
    { event: 'app/user.created' },
    async ({ event, step }) => {
        const userProfile = `
            - country: ${event.data.country}
            - Investment Goals: ${event.data.investmentGoals}
            - Risk Tolerance: ${event.data.riskTolerance}
            - Preferred Industry: ${event.data.preferredIndustry}
        `

        const promt = PERSONALIZED_WELCOME_EMAIL_PROMPT.replace(`{{userProfile}}`, userProfile)

        const response = await step.ai.infer('generate-welcome-intro', {
            model: step.ai.models.gemini({ model: 'gemini-2.0-flash-lite' }),
            body: {
                contents: [{
                    role: 'user',
                    parts: [{
                        text: promt
                    }]
                }]
            }
        })

        await step.run('send-welcome-email', async () => {
            const part = response.candidates?.[0]?.content?.parts?.[0];
            const introText = (part && 'text' in part ? part.text : null) ||'Thanks for joining Signalist. You now have the tools to track markets and make smarter moves.'
            const { data: { email, name } } = event;
            await sendWelcomeEmail({email, name, intro: introText})
        })

        return {
            success: true,
            message: 'Welcome email sent successfully'
        }
    }
)