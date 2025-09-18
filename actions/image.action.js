"use server"



export async function uploadImageToNodejs(formData, path = "/medications") {
  const base = (process.env.NodeJs_Url || process.env.NEXT_PUBLIC_NodeJs_Url || "http://localhost:8000").replace(/\/$/, "");
  const endpoint = path.startsWith("/") ? `${base}${path}` : `${base}/${path}`;

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      body: formData, // do NOT set Content-Type manually
      // keep credentials if needed
    });

    const raw = await res.text(); // read raw text first (so we can log HTML error pages)

    // If server returned non-2xx, log full body and throw helpful error
    if (!res.ok) {
      console.error("uploadImageToNodejs: non-OK response", { status: res.status, statusText: res.statusText });
      console.error("uploadImageToNodejs: response body (first 2k chars):", raw.slice(0, 2000));
      throw new Error(`Upload failed: ${res.status} ${res.statusText} — see server logs (body preview logged).`);
    }

    // Parse JSON only after successful status
    let data;
    try {
      data = JSON.parse(raw);
    } catch (parseErr) {
      console.error("uploadImageToNodejs: failed to parse JSON. Raw body:", raw.slice(0, 2000));
      throw new Error("Upload service returned non-JSON response. Check the upload service logs.");
    }

    // Validate expected fields
    const filename = data?.file?.filename ?? data?.filename ?? data?.data?.file?.filename;
    if (!filename) {
      console.error("uploadImageToNodejs: no filename in parsed response:", data);
      throw new Error("Upload succeeded but response doesn't contain filename.");
    }

    return {
      imageUrl: `${base}/public${path}/${filename}`.replace(/\/{2,}/g,'/'),
      base64Placeholder: data?.base64Placeholder ?? null,
      rawResponse: data
    };
  } catch (err) {
    // Log full stack so pm2 logs show it
    console.error("uploadImageToNodejs: fatal error:", err && (err.stack || err));
    // rethrow so upstream (CreateCom) handles it
    throw err;
  }
}


export async function deleteImageFromNodejs(url,imageUrl) {
    const filenameTable = imageUrl?.split("/");
    const filename = filenameTable[filenameTable?.length - 1];
    console.log("filename : ",filename)
    try {
      const response = await fetch(process.env.NodeJs_Url + url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ filename }),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to delete image: ${response.statusText}`);
      }
  
      const result = await response.json();
      console.log('Image deleted successfully:', result);
      return result;
    } catch (error) {
      console.error('Error deleting the image:', error.message);
      throw error;
    }
  }
  
