


export const getVersion = async () => {
    const response = await fetch('https://starfish-app-bh74t.ondigitalocean.app/api/version')
    return response.json()
}