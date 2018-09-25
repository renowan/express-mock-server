const config = {
  api: [
    {
      method: 'get',
      endPoint: '/get/item',
      json: 'get-items.hjson'
    },
    {
      method: 'get',
      endPoint: '/get/profile',
      json: 'get-profile.hjson'
    }
  ]
}

module.exports = config
