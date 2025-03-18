import Card from "@/components/card";
import Photos from "@/lib/photos";
import Image from "next/image";
import Link from "next/link";

export default function PhotosPage() {
  return (
    <>
      <div>Photos</div>

      <div className=" grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {Photos.map((photo) => (
          <Card key={photo.id} photo={photo}>
            <Link href={`/photos/${photo.id}`}>
              <Image
                src={photo.url}
                key={photo.id}
                height={400}
                width={400}
                alt="photo"
              />
            </Link>
          </Card>
        ))}
      </div>
    </>
  );
}
