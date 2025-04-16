"use client";
import NewAliasForm from "@/components/NewPostForm";
import AliasPreview from "@/components/AliasPreview";
import { AliasProps } from "@/types";
import { useState } from "react";

export default function Home() {
  // const [alias, setAlias] = useState<AliasProps[]>([]);

  // function append(newAlias: AliasProps | null) {
  //     if (newAlias) {
  //         setAlias([newAlias]);
  //     }
  // }

  return (
      <div className="font-mono">
        <h1 className="text-3xl m-3 font-bold">CS381 URL Shortener</h1>
        <div className="m-5">
          <h2 className="text-2xl font-bold">Shorten a URL:</h2>
          <h6>Enter a long URL to create a shorter, sharable link.</h6><br></br>
        
          <NewAliasForm />
{/*           
          {alias.map((a) => (
            <AliasPreview key={a.id} alias={a} />
          ))} */}
        </div>
      </div>
  );
}