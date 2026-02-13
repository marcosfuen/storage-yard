
/**
 * RIO BONITO STORAGE YARD - BACKEND SERVER
 * Requisitos: npm install express nodemailer cors dotenv
 */

import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors()); 
app.use(express.json()); 

// Ruta para recibir el contacto
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, address, storageType, totalSpaces, vehicleDetails } = req.body;

  console.log(`Nueva solicitud de: ${name}`);

  // 1. Configurar el Transportador (SMTP)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER || 'marcosfgonz@gmail.com',
      pass: process.env.EMAIL_PASS || 'tu-clave-secreta' 
    }
  });

  // 2. Definir el contenido del correo (HTML elegante)
  const mailOptions = {
    // Se fuerza el FROM con el email del formulario según pedido del usuario
    from: `"${name}" <${email}>`,
    to: 'lolo@gmail.com', 
    replyTo: email,
    subject: `🚐 NUEVA SOLICITUD DE ALMACENAMIENTO: ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; border: 1px solid #eee; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #003B5C; padding: 20px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; text-transform: uppercase;">Rio Bonito Storage</h1>
        </div>
        <div style="padding: 30px;">
          <h2 style="color: #D97706;">Detalles del Cliente</h2>
          <hr style="border: none; border-top: 1px solid #eee;" />
          <p><strong>De:</strong> ${email}</p>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Teléfono:</strong> ${phone}</p>
          <p><strong>Dirección:</strong> ${address}</p>
          
          <h2 style="color: #D97706; margin-top: 30px;">Detalles del Equipo</h2>
          <hr style="border: none; border-top: 1px solid #eee;" />
          <p><strong>Tipo de Almacenamiento:</strong> ${storageType.toUpperCase()}</p>
          <p><strong>Espacios Requeridos:</strong> ${totalSpaces}</p>
          <p><strong>Vehículo (Marca/Modelo/Placa):</strong> ${vehicleDetails}</p>
        </div>
        <div style="background-color: #f9f9f9; padding: 15px; text-align: center; font-size: 12px; color: #999;">
          Mensaje generado automáticamente desde el formulario web de Rio Bonito Yard.
        </div>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ 
      success: true, 
      message: 'Solicitud procesada y enviada correctamente.' 
    });
  } catch (error) {
    console.error('Error enviando email:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Error interno al enviar el correo. Por favor, intente de nuevo.' 
    });
  }
});

// Arrancar servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor de Rio Bonito corriendo en http://localhost:${PORT}`);
});
