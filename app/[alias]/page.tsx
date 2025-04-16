"use client";
import { useRouter } from 'next/navigation';
import getCollection, {ALIAS_COLLECTION} from "@/db";

export async function Alias({params, }: {params: Promise< {alias: string}>;}) {

    const { alias } = await params;
    console.log(alias);

    // getting the collection
    const aliasCollection = await getCollection(ALIAS_COLLECTION);
    const aliasRecord = await aliasCollection.findOne({alias});

    if (!aliasRecord) {
        throw new Error("Not Found.")
    }

    const router = useRouter();
    router.push(aliasRecord.url);

}