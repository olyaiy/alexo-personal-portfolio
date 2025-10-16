export async function POST(request: Request) {
  console.log("📨 API Route: Received form submission");
  
  try {
    const formData = await request.formData();
    console.log("📋 FormData entries:", Array.from(formData.entries()));

    // Ensure access key is present (env preferred, fallback to client-provided)
    const accessKeyFromEnv = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    console.log("🔑 Access key from env:", accessKeyFromEnv ? "✅ Present" : "❌ Missing");
    
    if (accessKeyFromEnv && !formData.get("access_key")) {
      formData.append("access_key", accessKeyFromEnv);
      console.log("🔑 Added access key from environment");
    }

    console.log("🌐 Sending request to Web3Forms...");
    const upstreamResponse = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
      // Do NOT set headers manually; let fetch set multipart/form-data for FormData
      // No-cache to avoid any proxy caching in dev
      cache: "no-store",
    });

    console.log("📡 Web3Forms response status:", upstreamResponse.status);
    const data = await upstreamResponse.json();
    console.log("📦 Web3Forms response data:", data);
    
    const status = upstreamResponse.ok ? 200 : upstreamResponse.status || 400;

    return new Response(JSON.stringify(data), {
      status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("❌ API Route Error:", error);
    console.error("❌ Error stack:", error instanceof Error ? error.stack : "No stack trace");
    
    return new Response(
      JSON.stringify({ success: false, message: "Proxy error", error: String(error) }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}


