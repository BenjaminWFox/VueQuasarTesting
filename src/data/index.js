import Parse from 'parse'

Parse.initialize('localVolumes')
Parse.serverURL = 'http://localhost:1337/parse'

const query = new Parse.Query(Parse.Role)

query.find({
  success: function (results) {
    alert('Successfully retrieved ' + results.length + ' roles.')
    // Do something with the returned Parse.Object values
    for (var i = 0; i < results.length; i++) {
      var object = results[i]
      console.log(object.attributes.name)
    }
  },
  error: function (error) {
    alert('Error: ' + error.code + ' ' + error.message)
  }
})

class ParseScripts {
  constructor () {
    console.log('Parse Processing...', Parse)
  }
}

export default ParseScripts
