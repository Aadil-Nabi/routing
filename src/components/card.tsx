import { Photo } from "@/lib/photos";
import React from "react";
import Image from "next/image";

export default function Card({
  children,
  photo,
}: {
  children: React.ReactNode;
  photo: Photo;
}) {
  return (
    <div className="card bg-base-100 w-96 shadow-lg">
      <div className="card-body">
        <h2 className="card-title">{photo.title}</h2>
        <p>{photo.description}</p>
      </div>
      <figure>{children}</figure>
    </div>
  );
}
