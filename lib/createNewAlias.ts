"use server";
import getCollection, { ALIAS_COLLECTION } from "@/db";
import { AliasProps } from "@/types";

export default async function createNewPost (
    url: string, 
    alias: string, 
): Promise<AliasProps> {
    console.log("creating new post");
    const p = {
        url: url,
        alias: alias,
    };

    // insert in DB (next week)
    const aliasCollection = await getCollection(ALIAS_COLLECTION);
    const res = await aliasCollection.insertOne({ ...p });

    if (!res.acknowledged) {
        throw new Error("DB insert failed");
    }
    // get id fro DB (next week)
    return {...p, id: res.insertedId.toHexString() };
}
