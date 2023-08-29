export default (req, res) => {
    const jsonData = {
      message: 'Welcome to our API!',
      version: '1.0',
    };
  
    res.json(jsonData);
  };
  