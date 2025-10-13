import { Firestore } from "@firebase/firestore/lite";
import { doc, getDoc, setDoc, getFirestore } from "firebase/firestore/lite";
import firebaseConfig from "@/config/firebaseConfig";
import { NextRequest, NextResponse } from "next/server";

const db: Firestore = getFirestore(firebaseConfig);

export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get("email");
  if (!email) return NextResponse.json({ message: "Email not present." }, { status: 400 });

  const trimmedEmail = email.trim().toLowerCase();

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    return NextResponse.json({ message: "Email not valid." }, { status: 400 });
  }

  try {
    const docRef = doc(db, "newsletter", trimmedEmail);
    const docSnap = await getDoc(docRef);
    return NextResponse.json({ subscribed: docSnap.exists() });
  } catch (err) {
    console.error("GET error:", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const email = data.email?.trim().toLowerCase();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ message: "Email not valid." }, { status: 400 });
  }

  try {
    const docRef = doc(db, "newsletter", email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return NextResponse.json({ message: "Already subscribed." }, { status: 200 });
    }

    await setDoc(docRef, { email, subscribedAt: new Date().toISOString() });

    return NextResponse.json({ message: "Subscribed successfully." });
  } catch (err) {
    console.error("POST error:", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
