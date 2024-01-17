import { endpointFetch } from "../../functions/endpoint"

export const homeAPI = async ( environment ) => {

    const endpoint = endpointFetch( environment )

    // NETWORK CALL TO GET DATA
    const network_data = await fetch( endpoint + "/home" )
    const data_json = await network_data.json()

    return data_json.data

}
