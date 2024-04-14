export default function handler(req, res) {
    if (req.method === 'POST') {
      const { firstName, lastName, servicio, email, phoneNumber, message, agreed } = req.body;
  
      // Aquí puedes procesar la información y guardarla como desees
  
      res.status(200).json({ message: 'Cotización recibida correctamente' });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  