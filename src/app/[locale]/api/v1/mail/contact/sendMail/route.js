import { sendMail } from "@/utils/sendMail";
import { NextResponse } from "next/server";

async function sendMailToActivusAdmin(
  email,
  clientName,
  admin,
  clientEmail,
  msg
) {
  try {
    const message = `
      <br><b>Dear ${admin},</b>
      <br>${msg}
      <br>
      <br>Regards,
      <br>${clientName}
      <br>Email: ${clientEmail}`;

      
      const words = msg.split(" ");
      const subject = words.slice(0, 6).join(" ");

    const result = await sendMail(
      email,
      `Hey! ${clientName} contacted you | ${subject}...`,
      message
    );
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !message || !email) {
      return NextResponse.json({
        success: false,
        message: "Please fill all fields!",
      });
    }

    const result = await sendMailToActivusAdmin(
      process.env.ACTIVUS_ADMIN_EMAIL,
      name,
      process.env.ACTIVUS_ADMIN_NAME,
      email,
      message
    );
    
    if (result?.success) {
      return NextResponse.json(
        {
          success: true,
          message: `Thanks ${name} for contacting me. We will get back to you soon.`,
        },
        { status: 201 }
      );
    } else {
      return NextResponse.json({
        success: false,
        message: result?.data,
      });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error?.message,
    });
  }
}