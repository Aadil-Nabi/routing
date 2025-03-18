import React from "react";
import Photos, { Photo } from "@/lib/photos";
import Link from "next/link";
import PhotoModal from "@/components/photo_modal";

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
          {photo ? <PhotoModal photo={photo}></PhotoModal> : <p>Not found</p>}
        </div>
      </div>
    </>
  );
}
