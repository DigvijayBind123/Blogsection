// Add Apollo Client to this file
import {ApolloClient,InMemoryCache} from "@apollo/client"
console.log("NEXT_PUBLIC_WORDPRESS_API_URL=",NEXT_PUBLIC_WORDPRESS_API_URL)
export const client = new ApolloClient({
    
    uri:`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/graphql`,
    cache:new InMemoryCache(),
})