"use server";
import getCollection, { ALIAS_COLLECTION } from "@/db";
import { AliasProps } from "@/types";

export default async function createNewAlias (
    url: string, 
    alias: string,
): Promise<AliasProps> {
    console.log("creating new post");


    const baseURL = "https://mp-5-pi.vercel.app/";
    const shortURL = `${baseURL}${alias}`;
    console.log(shortURL);

    const p = {
        url: url,
        alias: alias,
        shortURL: shortURL,
    };

    // FROM STACK OVERFLOW: https://stackoverflow.com/questions/74497502/how-to-check-for-a-valid-url-in-javascript
    const isValidUrl = (url: string) => {
        var urlPattern = new RegExp('^(https?:\\/\\/)?' + // validate protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // validate fragment locator
        return urlPattern.test(url);
    }

    // console.log(isValidUrl(url)); //true


    // checking if the URL is valid.
    if (!isValidUrl(url)) {
        throw new Error("Invalid URL: Could not verify URL. Please try again.");
    }

    const aliasCollection = await getCollection(ALIAS_COLLECTION);

    // check if the alias already exists
    const aliasExists = await aliasCollection.findOne({alias});
    if (aliasExists) {
        throw new Error("Alias already exists");
    }

    const res = await aliasCollection.insertOne({ ...p });



    if (!res.acknowledged) {
        throw new Error("DB insert failed");
    }
    // get id fro DB (next week)
    return {...p, id: res.insertedId.toHexString() };
}
