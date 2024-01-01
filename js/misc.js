function load_json(url) {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }
  
VANTA.NET({
  el: "body",
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x35353b,
  backgroundColor: 0x0,
  points: 20.00,
  maxDistance: 19.00
})

