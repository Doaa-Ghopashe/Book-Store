const cors = require('cors'),

corsOptions =  {
  origin: ['http://example.com','http://example2.com'],
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
