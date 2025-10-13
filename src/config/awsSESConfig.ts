import {SESClient, SESClientConfig} from "@aws-sdk/client-ses";

// Create SES service object.
const sesClient: SESClient = new SESClient({
  region: process.env.AWS_REGION as string,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
} as SESClientConfig);

export { sesClient };
