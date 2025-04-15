"use client";

import { AliasProps } from "@/types";
import { useRouter, useParams } from 'next/navigation'



export default function AliasPreview({alias}: {alias: AliasProps }) {
    // function goToLink(alias: AliasProps) {
    //     redirect.push('{alias.url}')
    // }

    const router = useRouter()
    const params = useParams()
    console.log(params)
    router.push(alias.url)
}

