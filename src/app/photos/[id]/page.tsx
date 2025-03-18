import React from "react";
import Photos, { Photo } from "@/lib/photos";
import Card from "@/components/card";
import Image from "next/image";
import Link from "next/link";

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photo = Photos.find((p) => p.id === id);
  console.log("photo:", photo);
  console.log("id:", id);
  console.log("type of id", typeof photo?.id);

  return (
    <>
      <div className="container-flex align-middle m-5">
        <div className="btn bg-green-700 text-white w-fit p-2 hover:bg-green-950">
          <Link href={"/photos"}>Photos Gallery</Link>
        </div>
        <div>
          {photo ? (
            <Card photo={photo}>
              <Image
                src={photo.url}
                key={id}
                height={400}
                width={400}
                alt="photo"
              />
            </Card>
          ) : (
            <p>Not found</p>
          )}
        </div>
      </div>
    </>
  );
}
