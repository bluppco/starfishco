export const endpointFetch = ( environment ) => {

    return environment === "staging" ? "https://starfishco-staging.blupp.workers.dev" : "https://staging.api.starfish.blupp.co"

}
