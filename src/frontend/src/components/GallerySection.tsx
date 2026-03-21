import { motion } from "motion/react";
import { useGetAllGalleryPhotos } from "../hooks/useQueries";
import { getBlobUrl } from "../utils/blobStorage";

const staticGalleryImages = [
  {
    src: "/assets/generated/hero-silambam.dim_1400x700.jpg",
    alt: "Silambam training session",
    caption: "Training in Progress",
    wide: true,
  },
  {
    src: "/assets/generated/class-silambam.dim_600x400.jpg",
    alt: "Silambam class in session",
    caption: "Group Class",
    wide: false,
  },
  {
    src: "/assets/generated/gallery-performance.dim_600x400.jpg",
    alt: "Cultural performance",
    caption: "Cultural Performance",
    wide: false,
  },
  {
    src: "/assets/generated/gallery-competition.dim_600x400.jpg",
    alt: "Competition winners",
    caption: "Competition Champions",
    wide: false,
  },
  {
    src: "/assets/generated/gallery-youth.dim_600x400.jpg",
    alt: "Youth training",
    caption: "Youth Programme",
    wide: false,
  },
];

export default function GallerySection() {
  const { data: uploadedPhotos } = useGetAllGalleryPhotos();
  const hasUploaded = uploadedPhotos && uploadedPhotos.length > 0;

  return (
    <section
      id="gallery"
      className="py-20"
      style={{ backgroundColor: "oklch(0.25 0.05 220)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading font-bold uppercase text-3xl sm:text-4xl mb-4 text-white">
            Gallery
          </h2>
          <div
            className="mx-auto h-1 w-20 rounded-full"
            style={{ backgroundColor: "oklch(0.72 0.13 70)" }}
          />
          <p className="mt-4 text-gray-300 max-w-xl mx-auto">
            Moments from our training sessions, competitions, and cultural
            performances.
          </p>
        </motion.div>

        {hasUploaded ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {uploadedPhotos.map((photo, i) => (
              <motion.div
                key={photo.id.toString()}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="relative overflow-hidden rounded-2xl group"
                style={{ height: "220px" }}
              >
                <img
                  src={getBlobUrl(photo.blobId)}
                  alt={photo.caption || "Gallery photo"}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {photo.caption && (
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
                    style={{
                      background:
                        "linear-gradient(to top, oklch(0.15 0.05 220 / 0.85) 0%, transparent 60%)",
                    }}
                  >
                    <span className="p-4 text-white font-bold text-sm uppercase tracking-widest">
                      {photo.caption}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {staticGalleryImages.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className={`relative overflow-hidden rounded-2xl group ${
                  img.wide ? "col-span-2 md:col-span-3" : ""
                }`}
                style={{ height: img.wide ? "300px" : "220px" }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
                  style={{
                    background:
                      "linear-gradient(to top, oklch(0.15 0.05 220 / 0.85) 0%, transparent 60%)",
                  }}
                >
                  <span className="p-4 text-white font-bold text-sm uppercase tracking-widest">
                    {img.caption}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
