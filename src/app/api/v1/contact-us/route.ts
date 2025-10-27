import {NextRequest, NextResponse} from "next/server";
import {addDoc, collection, getFirestore,} from "firebase/firestore/lite";
import {SendEmailCommand, SendEmailCommandOutput} from "@aws-sdk/client-ses";
import {sesClient} from "@/config/awsSESConfig";
import firebaseConfig from "@/config/firebaseConfig";
import assert from "assert";

const db = getFirestore(firebaseConfig);

type UserDetail = {
    fname: string;
    lname: string;
    email: string;
    phone?: string;
    company?: string;
    use_case?: string;
    message?: string;
    cta_used?: string;
};

const sendContactUsReply = async (
    userDetail: UserDetail
): Promise<SendEmailCommandOutput> => {
    const sendEmailCommand = new SendEmailCommand({
        Source: "ron@newron.ai",
        Destination: {ToAddresses: [userDetail.email!]},
        Message: {
            Subject: {Data: "Hello from Ron - Newron AI"},
            Body: {
                Text: {
                    Data: `Hi ${userDetail.fname},

Thank you for contacting Newron AI.

I am Ron, generative AI assistant for enterprise by Newron.ai. We have notified the concerned team. They will get back to you as soon as possible.

You are very important to us.

Regards,
Ron
AI Assistant
Newron AI`,
                },
            },
        },
    });

    return sesClient.send(sendEmailCommand);
};

const sendContactUsNotification = async (
    userDetail: UserDetail
): Promise<SendEmailCommandOutput> => {
    const sendEmailCommand = new SendEmailCommand({
        Source: "ron@newron.ai",
        Destination: {
            ToAddresses: ["rakibul@newron.ai", "rakibul@anthrope.ai"],
        },
        Message: {
            Subject: {Data: "New Contact Request - Newron AI"},
            Body: {
                Text: {
                    Data: `New contact request received:

Name: ${userDetail.fname} ${userDetail.lname}
Email: ${userDetail.email}
Phone: ${userDetail.phone || "-"}
Company: ${userDetail.company || "-"}
Use Case: ${userDetail.use_case || "-"}
Message: ${userDetail.message || "-"}
CTA Used: ${userDetail.cta_used || "-"}`,
                },
            },
        },
    });

    return sesClient.send(sendEmailCommand);
};

export async function POST(req: NextRequest) {
    try {
        const userDetail: UserDetail = await req.json();

        assert(userDetail.fname, "First name is required");
        assert(userDetail.lname, "Last name is required");
        assert(userDetail.email, "Email is required");

        try {
            const waitlistCol = collection(db, "waitlist");
            const docRef = await addDoc(waitlistCol, userDetail);
            console.log(
                `Added document with ID: ${docRef.id} to Firestore collection: ${waitlistCol.path}`
            );
        } catch (firestoreErr) {
            console.error("Firestore error:", firestoreErr);
        }

        try {
            const reply = await sendContactUsReply(userDetail);
            console.log(
                `Reply sent to ${userDetail.email} with message id: ${reply.MessageId}`
            );
        } catch (err) {
            console.error(`Failed to send reply to ${userDetail.email}`, err);
        }

        try {
            const notification = await sendContactUsNotification(userDetail);
            console.log(
                `Notification sent to internal team with message id: ${notification.MessageId}`
            );
        } catch (err) {
            console.error("Failed to send notification to internal team", err);
        }

        return NextResponse.json(
            {message: "Contact request submitted successfully."},
            {status: 200}
        );
    } catch (err: unknown) {
        console.error("POST /contact-us error:", err);

        let errorMessage = "Internal server error.";

        if (err instanceof Error) {
            errorMessage = err.message;
        } else if (typeof err === 'string') {
            errorMessage = err;
        }

        return NextResponse.json(
            {message: errorMessage},
            {status: 500}
        );
    }
}