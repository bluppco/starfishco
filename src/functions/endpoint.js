export const endpointFetch = ( environment ) => {

    return environment === "staging" ? "https://starfishco-staging.tyagi.workers.dev" : "https://staging.api.starfish.blupp.co"

}
