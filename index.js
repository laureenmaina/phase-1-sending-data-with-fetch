function submitData(name, email) {
  const url = 'http://localhost:3000/users';
  const data = {
      name: name,
      email: email
  };

  const options = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify(data)
  };

  return fetch(url, options)
      .then(response => {
          if (!response.ok) {
              return new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          document.body.innerHTML += `<p>New ID: ${data.id}</p>`;
      })
      .catch(error => {
          document.body.innerHTML += `<p>Error: ${error.message}</p>`;
           return submitData;

      });

}
