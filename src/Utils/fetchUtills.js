const BaseURL='https://marvelchatapi.herokuapp.com'
export  function get(url)
{
return fetch(BaseURL+url)
.then(res =>res.json(),
  )
}

export function post(data,url)
{
fetch(BaseURL+url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .then(response => console.log('Success:', JSON.stringify(response)))
  .catch(error => console.error('Error:', error));

}

export function put(url,data)
{
   
    fetch(BaseURL +url ,{
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json"
        }
    }).then(response => {
        return response.json()
    })
}

export function _delete(url)
{
fetch(BaseURL+url, {
    method: 'DELETE',
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .then(response => console.log('Success:', JSON.stringify(response)))
  .catch(error => console.error('Error:', error));

}
