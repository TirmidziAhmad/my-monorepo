"use server";

export async function verifyCaptcha(token: string) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    return { success: false, error: "Missing RECAPTCHA_SECRET_KEY" };
  }

  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${secretKey}&response=${token}`,
      },
    );

    const data = await response.json();

    if (data.success) {
      return { success: true };
    } else {
      return { success: false, error: "Invalid captcha" };
    }
  } catch (error) {
    return { success: false, error: "Failed to verify captcha" };
  }
}
