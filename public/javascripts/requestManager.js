class RequestManager {
	static async deleteRequest(route, body) {
    try {
      const response = await fetch(route, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
      if (!response.ok) {
        throw new Error(`Failed to delete request ${response.status}`)
      }
      const data = await response.json()
      const elToDel = document.querySelector(`[data-id="${body.id}"]`)
      if (elToDel) {
        elToDel.remove()
      }
      return data
    }
     catch (error) {
      console.error('Error:', error)
    }
  }
static handleFileSelect(event, imageSelector) {
	var file = event.target.files[0]
	if (file && file.type.startsWith('image/')) {
		var reader = new FileReader();
		reader.onload = function(e) {
			var imgElement = document.querySelector(imageSelector);
			imgElement.src = e.target.result
		}
		reader.readAsDataURL(file);
	}
}
}