
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export default async () => {
  try {
    const result = await cloudinary.api.resources({
  resource_type: "raw",
  type: "upload",
  max_results: 100,
});

console.log(
  "RAW ASSETS FOUND:",
  result.resources.map((asset) => ({
    public_id: asset.public_id,
    asset_folder: asset.asset_folder,
    resource_type: asset.resource_type,
    tags: asset.tags,
    secure_url: asset.secure_url,
  }))
);

    const reviews = await Promise.all(
      result.resources.map(async (asset) => {
        const response = await fetch(asset.secure_url);

        if (!response.ok) {
          throw new Error("Could not retrieve a review.");
        }

        return response.json();
      })
    );

    return new Response(JSON.stringify(reviews), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=60",
      },
    });
  } catch (error) {
    console.error("Review retrieval error:", error);

    return new Response(
      JSON.stringify({ message: "Unable to load reviews." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
