import { useMemo } from "react"
import axios from "axios"

export function useGitApi() {

    const api = {
        client_id: '62a7aee788972b7ae42c',
        client_secret: '33755a5bf86fefec11f78bd41bdfb09c4cee8d3f'
    }

    async function repository(page) {
        try {
            const response = await axios.get(`https://api.github.com/users/joaop-rosa/starred`)
            return response
        } catch (error) {
            console.log(error);
        }

    }

    return useMemo(
        () => ({
            repository,
        }),
        []
    )
}
