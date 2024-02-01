const express = require('express')
const app = express()
const port = process.env.PUBLIC_PORT || 3000 

app.get('/',(req, res)=>{
  res.send('Wierdest Food Combinations');
}

)
if (require.main === module) {
	app.listen(port, () => {
		console.log(`server running on PORT: ${port}`)
	})
}

module.exports = app
