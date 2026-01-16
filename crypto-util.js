import crypto from "crypto";

const ALGORITHM = "aes-256-gcm";

export function encrypt(text) {
  const key = Buffer.from(process.env.TOKEN_ENCRYPTION_KEY, "utf8");

  if (!key) {
    throw new Error("TOKEN_ENCRYPTION_KEY not set");
  }

  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv(ALGORITHM, key, iv);

  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");

  const authTag = cipher.getAuthTag();

  return {
    encrypted,
    iv: iv.toString("hex"),
    authTag: authTag.toString("hex"),
  };
}
