var contentful = require('contentful');
export const client = contentful.createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENT_DELIVERY_API_TOKEN
})

  

