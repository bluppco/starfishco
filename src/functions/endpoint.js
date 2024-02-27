export const endpointFetch = ( environment ) => {

    console.log( environment === "staging" ? "https://starfishco-staging.blupp.workers.dev" : "https://staging.api.starfish.blupp.co" )
    return environment === "staging" ? "https://starfishco-staging.blupp.workers.dev" : "https://staging.api.starfish.blupp.co"

}
