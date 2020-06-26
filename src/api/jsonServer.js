import axios from 'axios';

export default axios.create({
  baseURL: 'http://a5f9c63582ac.ngrok.io',
});


//created fake api using json server and using it through tunnel, session expires in 7 hours
//manually change url after 7 hours