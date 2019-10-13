import {config} from './config'

var contentful = require('contentful');

export const client = contentful.createClient({
    space: config.SPACE_ID,
    accessToken: config.CONTENT_DELIVERY_API_TOKEN
})

  

