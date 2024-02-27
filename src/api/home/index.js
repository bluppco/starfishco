import { endpointFetch } from "../../functions/endpoint"

export const homeAPI = async ( environment ) => {

    try {

        const endpoint = endpointFetch( environment )

        // NETWORK CALL TO GET DATA
        const network_data = await fetch( endpoint + "/home" )
        const data_json = await network_data.json()

        return data_json.data

    } catch ( error ){

        console.log("error is here")
        console.log( error )

    }


}
