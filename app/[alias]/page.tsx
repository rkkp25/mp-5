import { permanentRedirect, redirect } from 'next/navigation';
import getCollection, {ALIAS_COLLECTION} from "@/db";

export default  async function Alias({params }: {params: Promise< {alias: string}>;}) {

    const { alias } = await params;
    console.log(alias);

    // getting the collection
    const aliasCollection = await getCollection(ALIAS_COLLECTION);

    let url = "/"
    try {
        const aliasRecord = await aliasCollection.findOne({alias : alias});
        if (aliasRecord === null ) {
            console.log("go back home")
            throw new Error("No post found");
            //  redirect("/");
        }
        console.log("fwf", aliasRecord)
        url = aliasRecord.url
        //  permanentRedirect(aliasRecord.url);
    }
    catch (error) {
        console.log("go home")
        console.error(error);
        // redirect("/");
    }
    redirect(url)

}