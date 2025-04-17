"use server";
import getCollection, { ALIAS_COLLECTION } from "@/db";
import { AliasProps } from "@/types";
import { ExitToApp } from "@mui/icons-material";

export default async function createNewAlias (
    url: string, 
    alias: string,
): Promise<AliasProps | string> {
    console.log("creating new post");

    const p = {
        url: url,
        alias: alias,
    };

    if (alias === "") {
        return "EMPTY";
    }

    // FROM STACK OVERFLOW: https://stackoverflow.com/questions/74497502/how-to-check-for-a-valid-url-in-javascript
    // const isValidUrl = (url: string) => {
    //     var urlPattern = new RegExp('^(https?:\\/\\/)?' + // validate protocol
    //         '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
    //         '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
    //         '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
    //         '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
    //         '(\\#[-a-z\\d_]*)?$', 'i'); // validate fragment locator
    //     return !!urlPattern.test(url);
    // }

    // // checking if the URL is valid.
    // if (!isValidUrl(url)) {
    //     return "BAD URL"
    // }

    try {
        const reponse = await fetch(url)
        if (reponse.status > 400 || reponse.status < 200) {
            return "BAD URL"
        }
    }
    catch (error) {
        return "BAD RESPONSE"

    }

    const aliasCollection = await getCollection(ALIAS_COLLECTION);

    // check if the alias already exists
    const aliasExists = await aliasCollection.findOne({alias});
    if (aliasExists) {
        return "EXISTS"
    }

    const res = await aliasCollection.insertOne({ ...p });

    if (!res.acknowledged) {
        throw new Error("DB insert failed");
    }
    // get id fro DB (next week)
    return {...p, id: res.insertedId.toHexString() };
}
