import axios from "axios"

export const getResults = async () => {
    const dataEndpoint = 'https://gist.githubusercontent.com/yuhong90/b5544baebde4bfe9fe2d12e8e5502cbf/raw/44deafab00fc808ed7fa0e59a8bc959d255b9785/queryResult.json'
    try {
        // timeout set as 5 seconds to simulate network failure if required.
        const res = await axios.get(dataEndpoint, { timeout: 5000 })
        console.log(res.data)
        return res.data
    } catch (err) {
        throw 'Unable to communicate with search results API! ' + err;
    }
}

export const getSuggestionsApi = async (term) => {
    const suggestionsEndpoint = 'https://gist.githubusercontent.com/yuhong90/b5544baebde4bfe9fe2d12e8e5502cbf/raw/e026dab444155edf2f52122aefbb80347c68de86/suggestion.json'
    try {
        // timeout set as 5 seconds to simulate network failure if required.
        const res = await axios.get(suggestionsEndpoint, { timeout: 5000 })
        console.log(res.data)
        return res.data
    } catch (err) {
        throw 'Unable to communicate with suggestions API! ' + err;
    }
}