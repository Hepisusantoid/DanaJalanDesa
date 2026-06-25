module.exports = (req, res) => {
  // Mengatur header agar respon berupa JSON dan aman dibaca browser
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  try {
    res.status(200).json({
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "",
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "",
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "",
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "",
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "",
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "",
      allowedAdminEmails: process.env.NEXT_PUBLIC_ALLOWED_ADMIN_EMAILS || ""
    });
  } catch (error) {
    res.status(500).json({ error: "Gagal memuat variabel lingkungan di server" });
  }
};
